from src.user.domain.ilogin_service import ILoginService
from src.user.domain.iuser_repository import IUserRepository
from src.user.domain.user import User

## Classe de domínio
## Implementa o serviço de Login
class LoginService(ILoginService):
    def __init__(self, repository: IUserRepository):
        self.repository = repository

    def login(self, username: str, password: str) -> User:
        return self.repository.login(username=username, password=password)
