from django.test import TestCase
from rest_framework.test import APIClient
import uuid
import json

from src.work_station.adapters.models import StationBooking as StationBookingModel, WorkStation as WorkStationModel, WorkStationRoom as WorkStationRoomModel
from django.contrib.auth.models import User
from datetime import datetime

class TestStationBookingAPI(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_get_WHEN_there_are_no_bookings_THEN_return_404_and_error_message(self):
        expected = '{"detail": "No station booking found."}'

        response = self.client.get('/stationBookings')

        self.assertEqual(404, response.status_code)
        self.assertEqual(expected, response.content.decode("utf-8"))

    def test_get_WHEN_there_are_no_bookings_for_room_id_THEN_return_404_and_error_message(self):  
        expected = '{"detail": "No station booking found."}'

        response = self.client.get(f'/stationBookings?room_id={uuid.uuid4()}')

        self.assertEqual(404, response.status_code)
        self.assertEqual(expected, response.content.decode("utf-8"))

    def test_get_WHEN_there_are_bookings_for_room_id_THEN_return_200_and_room_bookings(self):  
        user = User(first_name="name", last_name="last", email="email")
        user.save()
        station_1 = WorkStationModel(station_id=uuid.uuid4(), name='1')
        station_1.save()
        work_station_room_1 = WorkStationRoomModel(room_id=uuid.uuid4(), name='Room 1', matrix=[[0, 0], [0, 1]])
        work_station_room_1.save()
        work_station_room_1.stations.set([station_1])
        work_station_room_1.save()
        booking_1 = StationBookingModel(person=user, station=station_1, date=datetime.now())
        booking_1.save()

        response = self.client.get(f'/stationBookings?room_id={work_station_room_1.room_id}')

        expected = [
            {
                'person': {
                    'email': user.email,
                    'first_name': user.first_name,
                    'last_name': user.last_name,
                    'id': user.id,
                },
                'station': {
                    'id': str(station_1.station_id), 'name': station_1.name
                },
                'date': datetime.now().strftime('%Y-%m-%d')
            }
        ]

        self.assertEqual(200, response.status_code)
        self.assertEqual(json.dumps(expected), response.content.decode("utf-8"))