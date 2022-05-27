from dataclasses import dataclass
from typing import List

from src.work_station.domain.work_station import WorkStation

@dataclass
class WorkStationRoom:
    id: str
    name: str
    stations: List[WorkStation]
