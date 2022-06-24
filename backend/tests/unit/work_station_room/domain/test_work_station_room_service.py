from django.test import TestCase
from unittest.mock import Mock

from src.work_station_room.domain.work_station_room import WorkStationRoom
from src.work_station_room.domain.work_station_room_service import WorkStationRoomService
from src.work_station.domain.work_station import WorkStation
from src.station_booking.domain.station_booking import StationBooking
from src.user.domain.user import User
from datetime import datetime


class TestWorkStationRoomService(TestCase):
    def setUp(self):
        self.repository_mock = Mock()
        self.service = WorkStationRoomService(repository=self.repository_mock)

    def test_WHEN_there_are_no_rooms_THEN_return_empty_list(self):
        expected = []
        self.repository_mock.listWorkStationRooms.return_value = []

        actual = self.service.listWorkStationRooms(room_id='1')

        self.assertEqual(expected, actual)

    def test_WHEN_there_are_rooms_THEN_return_list_of_rooms(self):
        expected = [
            WorkStationRoom(id='id', name='room', stations=[WorkStation(id='id1', name='1')], matrix=[['1']]),
            WorkStationRoom(id='id2', name='room2', stations=[WorkStation(id='id2', name='1')], matrix=[['1']])
        ]
        self.repository_mock.listWorkStationRooms.return_value = expected

        actual = self.service.listWorkStationRooms(room_id='1')

        self.assertEqual(expected, actual)
