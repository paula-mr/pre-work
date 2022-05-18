import abc
from typing import List
from datetime import datetime

from src.station_booking.domain.station_booking import StationBooking

## Interface de porta de saída utilizada pelo domínio
## para acessar a tabela de station booking
class IStationBookingRepository(metaclass=abc.ABCMeta):
    def listStationBookings(self, date: datetime) -> List[StationBooking]:
        pass
