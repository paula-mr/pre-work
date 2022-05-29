from src.user.domain.iuser_service import IUserService
from src.user.domain.iuser_repository import IUserRepository
from src.user.domain.user import User

## Classe de domínio
## Implementa o serviço de Login
class UserService(IUserService):
    def __init__(self, repository: IUserRepository):
        self.repository = repository

    def create(self, email: str, password: str, first_name: str, last_name: str) -> User:
        user = User(
            email=email,
            first_name=first_name,
            last_name=last_name
        )
        return self.repository.create(user=user, password=password)
