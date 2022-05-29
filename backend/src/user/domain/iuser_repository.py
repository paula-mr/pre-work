import abc

from src.user.domain.user import User

## Interface usada pelo domínio para acessar a tabela de usuário
## Considerada uma porta de saída em Arquitetura Hexagonal
class IUserRepository(metaclass=abc.ABCMeta):
    def login(self, username: str, password: str) -> User:
        pass

    def create(self, user: User, password: str) -> User:
        pass
