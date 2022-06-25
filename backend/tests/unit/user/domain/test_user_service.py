from django.test import TestCase
from unittest.mock import Mock

from src.user.adapters.exceptions import UsernameAlreadyExistsException
from src.user.domain.user import User
from src.user.domain.user_service import UserService

class TestUserService(TestCase):
    def setUp(self):
        self.repository_mock = Mock()
        self.service = UserService(repository=self.repository_mock)

    def test_WHEN_there_are_create_user_THEN_return_user(self):
        expected = User(
                id=1,
                email='teste', 
                first_name='teste', 
                last_name='teste'
            )
        self.repository_mock.create.return_value = User(
                id=1,
                email='teste', 
                first_name='teste', 
                last_name='teste'
            )

        actual = self.service.create(User(
                email='teste', 
                first_name='teste', 
                last_name='teste'
            ), 'secret')

        self.assertEqual(expected, actual)