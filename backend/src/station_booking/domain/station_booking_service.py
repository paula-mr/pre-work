from uuid import UUID
from typing import List
from datetime import datetime

from src.station_booking.domain.istation_booking import IStationBooking
from src.station_booking.domain.istation_booking_repository import IStationBookingRepository
from src.station_booking.domain.station_booking import StationBooking
from src.work_station_room.domain.iwork_station_room_repository import IWorkStationRoomRepository
from src.station_booking.adapters.exceptions import StationAlreadyBookedException


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
        all_bookings = self.bookings_repository.listStationBookings(date=date)
        if not room_id:
            return all_bookings
        
        station_rooms = self.rooms_repository.listWorkStationRooms(room_id=room_id)
        if len(station_rooms) > 0:
            work_station_room = station_rooms[0]
            return work_station_room.get_room_bookings(all_bookings=all_bookings)
        return []

    def bookStation(self, user_id: str, station_id: UUID, date: datetime) -> None:
        existing_booking = self.bookings_repository.getStationBooking(station_id=station_id, date=date)
        if not existing_booking:
            self.bookings_repository.bookStation(user_id=user_id, station_id=station_id, date=date)
        else:
            raise StationAlreadyBookedException
