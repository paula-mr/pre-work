import abc
from typing import List
from datetime import datetime

from src.station_booking.domain.station_booking import StationBooking

## Interface de porta de entrada para o serviços de station booking
class IStationBooking(metaclass=abc.ABCMeta):
    def listStationBookings(self, room_id: str, date: datetime) -> List[StationBooking]:
        pass
