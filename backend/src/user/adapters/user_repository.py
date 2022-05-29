from django.contrib.auth import authenticate
from django.contrib.auth.models import User as UserModel

from src.user.domain.iuser_repository import IUserRepository
from src.user.domain.user import User
from src.user.adapters.exceptions import NoUserFoundException, UsernameAlreadyExistsException

## Implementa acesso à tabela de user do banco de dados
## Considerado um adaptador em Arquitetura Hexagonal
class UserRepository(IUserRepository):
    def login(self, username: str, password: str) -> User:
        user = authenticate(username=username, password=password)
        if user is None:
            raise NoUserFoundException
        return User(
                id=user.id,
                email=user.email, 
                first_name=user.first_name, 
                last_name=user.last_name
            )
    
    def create(self, user: User, password: str) -> User:
        try:
            new_user = UserModel(
                username=user.email, 
                email=user.email, 
                first_name=user.first_name,
                last_name=user.last_name
            )
            new_user.set_password(password)
            new_user.save()
        except Exception:
            raise UsernameAlreadyExistsException

        return User(
                id=new_user.id,
                email=new_user.email, 
                first_name=new_user.first_name, 
                last_name=new_user.last_name
            )
