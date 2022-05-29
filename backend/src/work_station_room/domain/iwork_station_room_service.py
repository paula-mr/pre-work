import abc
from typing import List

from src.work_station_room.domain.work_station_room import WorkStationRoom

## Interface de porta de entrada para o serviços de work station room
class IWorkStationRoomService(metaclass=abc.ABCMeta):
    def listWorkStationRooms(self, room_id: str) -> List[WorkStationRoom]:
        pass
