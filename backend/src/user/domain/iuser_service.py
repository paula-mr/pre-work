import abc

from src.user.domain.user import User

## Interface do serviço de user
## Considerada uma porta de entrada em Arquitetura Hexagonal
class IUserService(metaclass=abc.ABCMeta):
    def create(self, email: str, password: str, first_name: str, last_name: str) -> User:
        pass
