from django.test import TestCase
from unittest.mock import Mock

from src.user.adapters.exceptions import NoUserFoundException
from src.user.domain.user import User
from src.user.domain.login_service import LoginService

class TestLoginService(TestCase):
    def setUp(self):
        self.repository_mock = Mock()
        self.service = LoginService(repository=self.repository_mock)

    def test_WHEN_there_are_user_THEN_return_user(self):
        expected = User(
                id=1,
                email='teste', 
                first_name='teste', 
                last_name='teste'
            )
        self.repository_mock.login.return_value = User(
                id=1,
                email='teste', 
                first_name='teste', 
                last_name='teste'
            )

        actual = self.service.login('teste', 'secret')

        self.assertEqual(expected, actual)