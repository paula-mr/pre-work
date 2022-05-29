"""src URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from src.user.adapters.api import LoginApi, UserApi
from src.user.adapters.user_repository import UserRepository
from src.user.domain.login_service import LoginService
from src.user.domain.user_service import UserService
from src.work_station.adapters.models import WorkStation, WorkStationRoom, StationBooking
from src.work_station_room.adapters.api import WorkStationRoomApi
from src.work_station_room.adapters.work_station_room_repository import WorkStationRoomRepository
from src.work_station_room.domain.work_station_room_service import WorkStationRoomService
from src.station_booking.adapters.api import StationBookingApi
from src.station_booking.adapters.station_booking_repository import StationBookingRepository
from src.station_booking.domain.station_booking_service import StationBookingService

admin.autodiscover()

admin.site.register(WorkStation)
admin.site.register(WorkStationRoom)
admin.site.register(StationBooking)

user_repository = UserRepository()
login_service = LoginService(repository=user_repository)
user_service = UserService(repository=user_repository)

work_station_room_repository = WorkStationRoomRepository()
work_station_room_service = WorkStationRoomService(repository=work_station_room_repository)

station_booking_repository = StationBookingRepository()
station_booking_service = StationBookingService(
    bookings_repository=station_booking_repository,
    rooms_repository=work_station_room_repository
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('login', csrf_exempt(LoginApi.as_view(login_service=login_service)), name='login'),
    path('user', csrf_exempt(UserApi.as_view(user_service=user_service)), name='user'),
    path('workStationRooms', csrf_exempt(WorkStationRoomApi.as_view(work_station_room_service=work_station_room_service)), name='workStationRooms'),
    path('stationBookings', csrf_exempt(StationBookingApi.as_view(station_booking_service=station_booking_service)), name='stationBookings'),
]
