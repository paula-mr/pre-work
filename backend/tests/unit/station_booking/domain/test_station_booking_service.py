from django.test import TestCase
from unittest.mock import Mock

from src.station_booking.domain.station_booking_service import StationBookingService
from src.work_station_room.domain.work_station_room import WorkStationRoom
from src.work_station_room.domain.work_station_room_service import WorkStationRoomService
from src.work_station.domain.work_station import WorkStation
from src.station_booking.domain.station_booking import StationBooking
from src.user.domain.user import User
from datetime import datetime


class TestStationBookingService(TestCase):
    def setUp(self):
        self.mock_repository_bookings = Mock()
        self.mock_repository_rooms = Mock()
        self.service = StationBookingService(
            bookings_repository=self.mock_repository_bookings, 
            rooms_repository=self.mock_repository_rooms)

    def test_WHEN_there_are_no_ids_THEN_return_all_bookings(self):
        expected = [
            StationBooking(person=User(
                id=1,
                email='teste', 
                first_name='teste', 
                last_name='teste'
            ), stations=[WorkStation(id='id1', name='1')], date=datetime.now()),
            StationBooking(person=User(
                id=2,
                email='teste', 
                first_name='teste', 
                last_name='teste'), stations=[WorkStation(id='id2', name='1')], date=datetime.now())
        ]
        self.mock_repository_bookings.listStationBookings.return_value = expected

        actual = self.service.listStationBookings(room_id=None, date=datetime.now())

        self.assertEqual(expected, actual)
        
    def test_WHEN_there_are_ids_and_no_rooms_THEN_return_list_empty(self):
        expected = []
        self.mock_repository_bookings.listStationBookings.return_value = []
        self.mock_repository_rooms.listWorkStationRooms.return_value = []

        actual = self.service.listStationBookings(room_id='id1', date=datetime.now())

        self.assertEqual(expected, actual)

