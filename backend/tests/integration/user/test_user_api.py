from django.test import TestCase
from rest_framework.test import APIClient
import uuid
import json

from src.work_station.adapters.models import StationBooking as StationBookingModel, WorkStation as WorkStationModel, WorkStationRoom as WorkStationRoomModel
from django.contrib.auth.models import User
from datetime import datetime


class TestLoginAPI(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_post_WHEN_no_username_is_sent_THEN_returns_400_and_error_message(self):  
        body = {
            'password': '12345678'
        }
        expected = {'detail': 'Invalid request'}

        response = self.client.post('/login', body, format='json')

        self.assertEqual(400, response.status_code)
        self.assertEqual(json.dumps(expected), response.content.decode("utf-8"))

    def test_post_WHEN_no_password_is_sent_THEN_returns_400_and_error_message(self):  
        body = {
            'username': 'email@email.com'
        }
        expected = {'detail': 'Invalid request'}

        response = self.client.post('/login', body, format='json')

        self.assertEqual(400, response.status_code)
        self.assertEqual(json.dumps(expected), response.content.decode("utf-8"))

    def test_post_WHEN_user_does_not_exist_THEN_returns_403_and_error_message(self):  
        body = {
            'username': 'email@email.com',
            'password': '12345678'
        }
        expected = {'detail': 'Username or password invalid'}

        response = self.client.post('/login', body, format='json')

        self.assertEqual(403, response.status_code)
        self.assertEqual(json.dumps(expected), response.content.decode("utf-8"))

    def test_post_WHEN_it_is_valid_THEN_return_200_and_data(self):  
        new_user = User(
            username='email@email.com', 
            email='email@email.com', 
            first_name='Jane',
            last_name='Doe'
        )
        new_user.set_password('12345678')
        new_user.save()
        body = {
            'username': 'email@email.com',
            'password': '12345678'
        }
        expected = {"email": "email@email.com", "first_name": "Jane", "last_name": "Doe", "id": new_user.id}

        response = self.client.post('/login', body, format='json')

        self.assertEqual(200, response.status_code)
        self.assertEqual(json.dumps(expected), response.content.decode("utf-8"))

    def test_post_WHEN_password_is_incorrect_THEN_return_403_and_error(self):  
        new_user = User(
            username='email@email.com', 
            email='email@email.com', 
            first_name='Jane',
            last_name='Doe'
        )
        new_user.set_password('12345678')
        new_user.save()
        body = {
            'username': 'email@email.com',
            'password': '123456789'
        }
        expected = {'detail': 'Username or password invalid'}

        response = self.client.post('/login', body, format='json')

        self.assertEqual(403, response.status_code)
        self.assertEqual(json.dumps(expected), response.content.decode("utf-8"))


class TestUserAPI(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_post_WHEN_no_first_name_is_sent_THEN_returns_400_and_error_message(self):  
        body = {
            'last_name': 'Doe',
            'email': 'email@email.com',
            'password': '12345678'
        }
        expected = {'detail': 'Invalid request'}

        response = self.client.post('/user', body, format='json')

        self.assertEqual(400, response.status_code)
        self.assertEqual(json.dumps(expected), response.content.decode("utf-8"))

    def test_post_WHEN_no_last_name_is_sent_THEN_returns_400_and_error_message(self):  
        body = {
            'first_name': 'Jane',
            'email': 'email@email.com',
            'password': '12345678'
        }
        expected = {'detail': 'Invalid request'}

        response = self.client.post('/user', body, format='json')

        self.assertEqual(400, response.status_code)
        self.assertEqual(json.dumps(expected), response.content.decode("utf-8"))

    def test_post_WHEN_no_email_is_sent_THEN_returns_400_and_error_message(self):  
        body = {
            'first_name': 'Jane',
            'last_name': 'Doe',
            'password': '12345678'
        }
        expected = {'detail': 'Invalid request'}

        response = self.client.post('/user', body, format='json')

        self.assertEqual(400, response.status_code)
        self.assertEqual(json.dumps(expected), response.content.decode("utf-8"))

    def test_post_WHEN_no_password_is_sent_THEN_returns_400_and_error_message(self):  
        body = {
            'first_name': 'Jane',
            'last_name': 'Doe',
            'email': 'email@email.com',
        }
        expected = {'detail': 'Invalid request'}

        response = self.client.post('/user', body, format='json')

        self.assertEqual(400, response.status_code)
        self.assertEqual(json.dumps(expected), response.content.decode("utf-8"))

    def test_post_WHEN_it_is_valid_THEN_return_201(self):  
        body = {
            'first_name': 'Jane',
            'last_name': 'Doe',
            'email': 'email@email.com',
            'password': '12345678'
        }

        response = self.client.post('/user', body, format='json')

        self.assertEqual(201, response.status_code)
