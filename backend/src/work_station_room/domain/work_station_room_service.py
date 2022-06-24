from typing import List

from src.work_station_room.domain.iwork_station_room_service import IWorkStationRoomService
from src.work_station_room.domain.iwork_station_room_repository import IWorkStationRoomRepository
from src.work_station_room.domain.work_station_room import WorkStationRoom

## Classe de domínio
## Implementa o serviço de WorkStationRoom
class WorkStationRoomService(IWorkStationRoomService):
    def __init__(self, repository: IWorkStationRoomRepository):
        self.repository = repository

    def listWorkStationRooms(self, room_id: str) -> List[WorkStationRoom]:
        return self.repository.listWorkStationRooms(room_id=room_id)
