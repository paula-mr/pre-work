from typing import List
from datetime import datetime

from src.work_station.adapters.models import WorkStationRoom as WorkStationRoomModel
from src.work_station_room.domain.iwork_station_room_repository import IWorkStationRoomRepository
from src.work_station_room.domain.work_station_room import WorkStationRoom
from src.user.domain.user import User
from src.work_station.domain.work_station import WorkStation
from src.work_station_room.adapters.exceptions import NoWorkStationRoomsFoundException

## Implementa adaptador de acesso à tabela de work
## station rooms do banco de dados
class WorkStationRoomRepository(IWorkStationRoomRepository):
    def listWorkStationRooms(self, room_id: str) -> List[WorkStationRoom]:
        work_station_rooms_model = None
        if room_id != "":
            work_station_rooms_model =  WorkStationRoomModel.objects.filter(
                room_id=room_id,
            ).all()
        else:
            work_station_rooms_model =  WorkStationRoomModel.objects.filter().all()

        if work_station_rooms_model is None:
            raise NoWorkStationRoomsFoundException

        work_station_rooms = []
        for station_room_model in work_station_rooms_model:
            stations = []
            for station_model in station_room_model.stations.all():
                station = WorkStation(
                    id=str(station_model.station_id),
                    name=station_model.name
                )
                stations.append(station)
            work_station_room = WorkStationRoom(
                id=str(station_room_model.room_id),
                name=station_room_model.name,
                stations=stations
            )
            work_station_rooms.append(work_station_room)

        return work_station_rooms
