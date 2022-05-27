from django.views import View
from django.http import HttpResponse
import json
from datetime import datetime

from src.utils import EnhancedJSONEncoder

from src.station_booking.domain.istation_booking import IStationBooking
from src.station_booking.adapters.exceptions import NoStationBookingFoundException

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
