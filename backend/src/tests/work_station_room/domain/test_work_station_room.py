from django.test import TestCase
from src.work_station_room.domain.work_station_room import WorkStationRoom
from src.work_station.domain.work_station import WorkStation


class TestWorkStationRoom(TestCase):
    def test_WHEN_there_are_no_bookings_THEN_return_empty_list(self):
        station = WorkStation(id='id', name='1')
        work_station_room = WorkStationRoom(id='id', name='room', stations=[station], matrix=[['1']])
        expected = []

        actual = work_station_room.get_room_bookings(all_bookings=[])

        self.assertEqual(expected, actual)
