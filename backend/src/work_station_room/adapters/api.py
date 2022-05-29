from django.views import View
from django.http import HttpResponse
import json

from src.utils import EnhancedJSONEncoder

from src.work_station_room.domain.iwork_station_room_service import IWorkStationRoomService
from src.work_station_room.adapters.exceptions import NoWorkStationRoomsFoundException

## Adaptador de acesso aos serviços de Work Station Rooms via Web/REST
class WorkStationRoomApi(View):
    work_station_room_service = None
    
    def __init__(self, work_station_room_service: IWorkStationRoomService):
        self.work_station_room_service = work_station_room_service

    def get(self, request):        
        try:
            param_room_id = request.GET.get('room_id', '')
            work_station_rooms = self.work_station_room_service.listWorkStationRooms(
                room_id=param_room_id,
            )
        except NoWorkStationRoomsFoundException:
            return HttpResponse(json.dumps(
                {
                    'detail': "No work station rooms found."
                },
            ), status=404)
        except Exception as e:
            print(e)
            return HttpResponse(json.dumps({'detail': 'Something went wrong'}), status=500)

        data = json.dumps(work_station_rooms, cls=EnhancedJSONEncoder)
        return HttpResponse(data, status=200)
