import abc

from src.user.domain.user import User

## Interface do serviço de login
## Considerada uma porta de entrada em Arquitetura Hexagonal
class ILoginService(metaclass=abc.ABCMeta):
    def login(self, username: str, password: str) -> User:
        pass
