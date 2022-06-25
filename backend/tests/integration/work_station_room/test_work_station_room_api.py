from django.test import TestCase
from rest_framework.test import APIClient
import uuid
import json

from src.work_station_room.domain.work_station_room import WorkStationRoom
from src.work_station_room.domain.work_station_room_service import WorkStationRoomService
from src.work_station.domain.work_station import WorkStation
from src.station_booking.domain.station_booking import StationBooking
from src.work_station.adapters.models import WorkStationRoom as WorkStationRoomModel, WorkStation as WorkStationModel


class TestWorkStationRoomAPI(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_get_WHEN_there_are_no_work_stations_THEN_return_404_and_error_message(self):
        expected = '{"detail": "No work station rooms found."}'

        response = self.client.get('/workStationRooms')

        self.assertEqual(404, response.status_code)
        self.assertEqual(expected, response.content.decode("utf-8"))

    def test_get_WHEN_there_are_work_stations_THEN_return_200_and_rooms(self):
        work_station = WorkStationModel(station_id=uuid.uuid4(), name='Savassi')
        work_station.save()
        room = WorkStationRoomModel(room_id=uuid.uuid4(), name='Room 1', matrix=[[0, 0], [0, 1]])
        room.save()
        room.stations.set([work_station])
        room.save()
        room_2 = WorkStationRoomModel(room_id=uuid.uuid4(), name='Room 2', matrix=[[0, 0], [0, 2]])
        room_2.save()
        expected = [
            {
                'id': str(room.room_id), 
                'name': 'Room 1', 
                'stations': [{"id": str(work_station.station_id), "name": "Savassi"}], 
                'matrix': [[0, 0], [0, 1]]
            },
            {
                'id': str(room_2.room_id), 
                'name': 'Room 2', 
                'stations': [], 
                'matrix': [[0, 0], [0, 2]]
            }
        ]

        response = self.client.get('/workStationRooms')

        self.assertEqual(200, response.status_code)
        self.assertEqual(json.dumps(expected), response.content.decode("utf-8"))

    def test_get_WHEN_there_are_work_stations_and_a_room_id_is_passed_THEN_return_200_and_only_that_room(self):
        work_station = WorkStationModel(station_id=uuid.uuid4(), name='Savassi')
        work_station.save()
        room = WorkStationRoomModel(room_id=uuid.uuid4(), name='Room 1', matrix=[[0, 0], [0, 1]])
        room.save()
        room.stations.set([work_station])
        room.save()
        room_2 = WorkStationRoomModel(room_id=uuid.uuid4(), name='Room 2', matrix=[[0, 0], [0, 2]])
        room_2.save()
        expected = [
            {
                'id': str(room.room_id), 
                'name': 'Room 1', 
                'stations': [{"id": str(work_station.station_id), "name": "Savassi"}], 
                'matrix': [[0, 0], [0, 1]]
            }
        ]

        response = self.client.get(f'/workStationRooms?room_id={str(room.room_id)}')

        self.assertEqual(200, response.status_code)
        self.assertEqual(json.dumps(expected), response.content.decode("utf-8"))
