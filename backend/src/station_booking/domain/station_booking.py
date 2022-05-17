from dataclasses import dataclass
from datetime import date

from src.user.domain.user import User
from src.work_station.domain.work_station import WorkStation

@dataclass
class StationBooking:
    person: User
    station: WorkStation
    date: str
