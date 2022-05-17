from typing import List

from src.work_station.adapters.models import StationBooking as StationBookingModel
from src.station_booking.domain.istation_booking_repository import IStationBookingRepository
from src.station_booking.domain.station_booking import StationBooking
from src.user.domain.user import User
from src.work_station.domain.work_station import WorkStation
from src.station_booking.adapters.exceptions import NoStationBookingFoundException

## Implementa adaptador de acesso à tabela de station 
## booking do banco de dados
class StationBookingRepository(IStationBookingRepository):
    def listStationBookings(self, room_id: str, date: str) -> List[StationBooking]:
        station_bookings = StationBookingModel.objects.filter()
        #TODO: filter results
        station_booking_test = StationBooking(
            person=User(first_name="victor", last_name="moraes", email="victor@ufmg.br"), 
            station=WorkStation(id="123", name="station_01"), 
            date="2022-05-16"
        )
        if station_bookings is None:
            raise NoStationBookingFoundException
        return [station_booking_test, station_booking_test]
