from typing import List
from datetime import datetime

from src.station_booking.domain.istation_booking import IStationBooking
from src.station_booking.domain.istation_booking_repository import IStationBookingRepository
from src.station_booking.domain.station_booking import StationBooking
from src.work_station_room.domain.iwork_station_room_repository import IWorkStationRoomRepository


## Classe de domínio
## Implementa o serviço de StationBooking
class StationBookingService(IStationBooking):
    def __init__(
        self, 
        bookings_repository: IStationBookingRepository, 
        rooms_repository: IWorkStationRoomRepository
    ):
        self.bookings_repository = bookings_repository
        self.rooms_repository = rooms_repository

    def listStationBookings(self, room_id: str, date: datetime) -> List[StationBooking]:
        station_bookings = self.bookings_repository.listStationBookings(date=date)
        
        if room_id != "":
            station_bookings_by_room = []
            station_rooms = self.rooms_repository.listWorkStationRooms(room_id=room_id)
            if len(station_rooms) != 0:
                work_station_room = station_rooms[0]
                for booking in station_bookings:
                    for room_station in work_station_room.stations:
                        if booking.station.id == room_station.id:
                            station_bookings_by_room.append(booking)
            return station_bookings_by_room

        return station_bookings
