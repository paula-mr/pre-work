from typing import List
from datetime import datetime

from src.work_station.adapters.models import StationBooking as StationBookingModel
from src.station_booking.domain.istation_booking_repository import IStationBookingRepository
from src.station_booking.domain.station_booking import StationBooking
from src.user.domain.user import User
from src.work_station.domain.work_station import WorkStation
from src.station_booking.adapters.exceptions import NoStationBookingFoundException

## Implementa adaptador de acesso à tabela de station 
## booking do banco de dados
class StationBookingRepository(IStationBookingRepository):
    def listStationBookings(self, date: datetime) -> List[StationBooking]:
        station_bookings_model = None
        if date != None:
            station_bookings_model =  StationBookingModel.objects.filter(
                date__year=date.year,
                date__month=date.month,
                date__day=date.day
            ).all()
        else:
            station_bookings_model =  StationBookingModel.objects.filter().all()
            
        if station_bookings_model is None:
            raise NoStationBookingFoundException

        station_bookings = []
        for booking_model in station_bookings_model:
            person = booking_model.person
            work_station = booking_model.station
            station_booking = StationBooking(
                person=User(
                    first_name=person.first_name, 
                    last_name=person.last_name, 
                    email=person.email
                ), 
                station=WorkStation(
                    id=str(work_station.station_id),
                    name=work_station.name
                ),
                date=booking_model.date
            )
            station_bookings.append(station_booking)

        return station_bookings