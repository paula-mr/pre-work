from django.views import View
from django.http import HttpResponse
from django.core import serializers
import json

from src.utils import EnhancedJSONEncoder

from src.station_booking.domain.istation_booking import IStationBooking
from src.station_booking.adapters.exceptions import NoStationBookingFoundException

## Adaptador de acesso aos serviços de Stations Booking via Web/REST
class StationBookingApi(View):
    station_booking_service = None
    
    def __init__(self, station_booking_service: IStationBooking):
        self.station_booking_service = station_booking_service

    def get(self, request):        
        try:
            room_id = request.GET.get('room_id', '')
            date = request.GET.get('date', '')
            station_bookings = self.station_booking_service.listStationBookings(
                room_id=room_id, 
                date=date,
            )
        except NoStationBookingFoundException:
            return HttpResponse(json.dumps(
                {
                    'detail': f"No station booking found."
                },
            ), status=404)
        except Exception:
            return HttpResponse(json.dumps({'detail': 'Something went wrong'}), status=500)

        data = json.dumps(station_bookings, cls=EnhancedJSONEncoder)
        return HttpResponse(data, status=200)