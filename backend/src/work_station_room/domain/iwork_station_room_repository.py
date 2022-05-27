import abc
from typing import List

from src.work_station_room.domain.work_station_room import WorkStationRoom

## Interface de porta de saída utilizada pelo domínio
## para acessar a tabela de work station room
class IWorkStationRoomRepository(metaclass=abc.ABCMeta):
    def listWorkStationRoom(self, room_id: str) -> List[WorkStationRoom]:
        pass
