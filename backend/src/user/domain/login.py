from src.user.domain.ilogin import ILogin
from src.user.domain.iuser_repository import IUserRepository
from src.user.domain.user import User

## Classe de domínio
## Implementa o serviço de Login
class Login(ILogin):
    def __init__(self, repository: IUserRepository):
        self.repository = repository

    def login(self, username: str, password: str) -> User:
        return self.repository.login(username=username, password=password)
