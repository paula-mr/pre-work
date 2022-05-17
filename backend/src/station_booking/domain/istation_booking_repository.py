import abc
from typing import List

from src.station_booking.domain.station_booking import StationBooking

## Interface de porta de saída utilizada pelo domínio
## para acessar a tabela de station booking
class IStationBookingRepository(metaclass=abc.ABCMeta):
    def listStationBookings(self, room_id: str, date: str) -> List[StationBooking]:
        pass
