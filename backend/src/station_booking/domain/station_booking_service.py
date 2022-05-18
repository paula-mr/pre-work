from typing import List
from datetime import datetime

from src.station_booking.domain.istation_booking import IStationBooking
from src.station_booking.domain.istation_booking_repository import IStationBookingRepository
from src.station_booking.domain.station_booking import StationBooking

## Classe de domínio
## Implementa o serviço de StationBooking
class StationBookingService(IStationBooking):
    def __init__(self, repository: IStationBookingRepository):
        self.repository = repository

    def listStationBookings(self, room_id: str, date: datetime) -> List[StationBooking]:
        # TODO: Call endpoint to retrieve work station room by room_id
        stationBookings = self.repository.listStationBookings(date=date)
        # TODO: Filter station bookings by stations that belongs to room
        # TODO: Return filtered station bookings by room_id and date
        return stationBookings
