from django.test import TestCase
from src.work_station_room.domain.work_station_room import WorkStationRoom
from src.work_station.domain.work_station import WorkStation
from src.station_booking.domain.station_booking import StationBooking
from src.user.domain.user import User
from datetime import datetime


class TestWorkStationRoom(TestCase):
    def test_WHEN_there_are_no_bookings_THEN_return_empty_list(self):
        station = WorkStation(id='id', name='1')
        work_station_room = WorkStationRoom(id='id', name='room', stations=[station], matrix=[['1']])
        expected = []

        actual = work_station_room.get_room_bookings(all_bookings=[])

        self.assertEqual(expected, actual)

    def test_WHEN_there_is_a_booking_from_another_room_THEN_return_empty_list(self):
        station = WorkStation(id='id', name='1')
        work_station_room = WorkStationRoom(id='id', name='room', stations=[station], matrix=[['1']])
        booking = StationBooking(person=User(id=1, first_name="name", last_name="last", email="email"), station=WorkStation(id='id2', name='2'), date=datetime.now())
        expected = []

        actual = work_station_room.get_room_bookings(all_bookings=[booking])

        self.assertEqual(expected, actual)
