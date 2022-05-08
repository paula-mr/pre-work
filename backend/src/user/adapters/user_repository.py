from django.contrib.auth import authenticate

from src.user.domain.iuser_repository import IUserRepository
from src.user.domain.user import User
from src.user.adapters.exceptions import NoUserFoundException

## Implementa acesso à tabela de user do banco de dados
## Considerado um adaptador em Arquitetura Hexagonal
class UserRepository(IUserRepository):
    def login(self, username: str, password: str) -> User:
        user = authenticate(username=username, password=password)
        if user is None:
            raise NoUserFoundException
        return User(
                email=user.email, 
                first_name=user.first_name, 
                last_name=user.last_name
            )
