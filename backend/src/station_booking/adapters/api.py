from django.views import View
from django.http import HttpResponse
import json
from datetime import datetime

from src.utils import EnhancedJSONEncoder

from src.station_booking.domain.istation_booking import IStationBooking
from src.station_booking.adapters.exceptions import NoStationBookingFoundException, NoStationFoundException
from src.user.adapters.exceptions import NoUserFoundException


## Adaptador de acesso aos serviços de Station Bookings via Web/REST
class StationBookingApi(View):
    station_booking_service = None
    
    def __init__(self, station_booking_service: IStationBooking):
        self.station_booking_service = station_booking_service

    def get(self, request):        
        try:
            param_room_id = request.GET.get('room_id', '')
            param_date = request.GET.get('date', '')
            date = datetime.strptime(param_date, "%Y-%m-%d") if param_date != '' else None
            station_bookings = self.station_booking_service.listStationBookings(
                room_id=param_room_id, 
                date=date
            )
        except NoStationBookingFoundException:
            return HttpResponse(json.dumps(
                {
                    'detail': "No station booking found."
                },
            ), status=404)
        except Exception as e:
            print(e)
            return HttpResponse(json.dumps({'detail': 'Something went wrong'}), status=500)

        data = json.dumps(station_bookings, cls=EnhancedJSONEncoder)
        return HttpResponse(data, status=200)
    
    def post(self, request):        
        data = json.loads(request.body.decode("utf-8"))
        station_id = data.get('station_id', '')
        user_id = data.get('user_id', '')
        param_date = data.get('date', '')
        date = datetime.strptime(param_date, "%Y-%m-%d") if param_date != '' else None

        if not station_id or not user_id or not date:
            return HttpResponse(json.dumps({'detail': 'Invalid request'}), status=400)

        try:
            station_bookings = self.station_booking_service.bookStation(
                user_id=user_id,
                station_id=station_id,
                date=date
            )
        except NoUserFoundException as e:
            return HttpResponse(json.dumps({'detail': 'Invalid user'}), status=400)
        except NoStationFoundException as e:
            return HttpResponse(json.dumps({'detail': 'Invalid station'}), status=400)
        except Exception as e:
            print(e)
            return HttpResponse(json.dumps({'detail': 'Something went wrong'}), status=500)

        return HttpResponse(status=201)
