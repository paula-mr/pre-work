from django.test import TestCase
from unittest.mock import Mock

from src.station_booking.domain.station_booking_service import StationBookingService
from src.work_station_room.domain.work_station_room import WorkStationRoom
from src.work_station.domain.work_station import WorkStation
from src.station_booking.domain.station_booking import StationBooking
from src.user.domain.user import User
from src.station_booking.adapters.exceptions import StationAlreadyBookedException
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
                email='teste',
                first_name='teste', 
                last_name='teste',
                id=1
            ), station=WorkStation(id='id1', name='1'), date=datetime.now()),
            StationBooking(person=User(
                email='teste',
                first_name='teste', 
                last_name='teste',
                id=2
                ), station=WorkStation(id='id2', name='1'), date=datetime.now())
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

    def test_WHEN_there_are_bookings_for_room_id_THEN_return_list_of_bookings_for_room(self):
        user = User(id=1, first_name="name", last_name="last", email="email")

        station_1 = WorkStation(id='id1', name='1')
        work_station_room_1 = WorkStationRoom(id='id1', name='room 1', stations=[station_1], matrix=[['1']])
        booking_1 = StationBooking(person=user, station=station_1, date=datetime.now())

        station_2 = WorkStation(id='id2', name='1')
        work_station_room_2 = WorkStationRoom(id='id2', name='room 2', stations=[station_2], matrix=[['1']])
        booking_2 =   StationBooking(person=user, station=station_2, date=datetime.now())

        self.mock_repository_bookings.listStationBookings.return_value = [
            booking_1,
            booking_2
        ]
        self.mock_repository_rooms.listWorkStationRooms.return_value = [work_station_room_2]

        expected = [
            booking_2,
        ]

        actual = self.service.listStationBookings(room_id='id2', date=datetime.now())

        self.assertEqual(expected, actual)

    def test_WHEN_station_is_not_booked_yet_THEN_successfully_book_station(self):
        expected = None

        self.mock_repository_bookings.getStationBooking.return_value = None
        self.mock_repository_bookings.bookStation.return_value = expected

        result = self.service.bookStation(user_id="id1", station_id="id1", date=datetime.now())

        self.assertEqual(expected, result)

    def test_WHEN_station_is_already_booked_THEN_throw_station_already_booked_exception(self):
        with self.assertRaises(StationAlreadyBookedException):
            user = User(id=1, first_name="name", last_name="last", email="email")
            station_1 = WorkStation(id='id1', name='1')
            booking_1 = StationBooking(person=user, station=station_1, date=datetime.now())

            self.mock_repository_bookings.getStationBooking.return_value = booking_1

            self.service.bookStation(user_id=user.id, station_id=station_1.id, date=datetime.now())
