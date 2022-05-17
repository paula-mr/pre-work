from typing import List

from src.station_booking.domain.istation_booking import IStationBooking
from src.station_booking.domain.istation_booking_repository import IStationBookingRepository
from src.station_booking.domain.station_booking import StationBooking

## Classe de domínio
## Implementa o serviço de StationBooking
class StationBookingService(IStationBooking):
    def __init__(self, repository: IStationBookingRepository):
        self.repository = repository

    def listStationBookings(self, room_id: str, date: str) -> List[StationBooking]:
        return self.repository.listStationBookings(room_id=room_id, date=date)
