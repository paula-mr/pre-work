from django.views import View
from django.http import HttpResponse
import json

from src.utils import EnhancedJSONEncoder

from src.user.domain.ilogin import ILogin
from src.user.domain.iuser_service import IUserService
from src.user.adapters.exceptions import NoUserFoundException, UsernameAlreadyExistsException

## Oferece acesso ao sistema via Web/REST
## Considerado um adaptador em Arquitetura Hexagonal
class LoginApi(View):
    login_service = None
    
    def __init__(self, login_service: ILogin):
        self.login_service = login_service

    def post(self, request):
        data = json.loads(request.body.decode("utf-8"))
        username = data.get('username')
        password = data.get('password')

        if not username or not password:
            return HttpResponse(json.dumps({'detail': 'Invalid request'}), status=400)
        
        try:
            user = self.login_service.login(username=username, password=password)
        except NoUserFoundException:
            return HttpResponse(json.dumps({'detail': 'Username or password invalid'}), status=403)
        except Exception:
            return HttpResponse(json.dumps({'detail': 'Something went wrong'}), status=500)

        data = json.dumps(user, cls=EnhancedJSONEncoder)
        return HttpResponse(data, status=200)

class UserApi(View):
    user_service = None
    
    def __init__(self, user_service: IUserService):
        self.user_service = user_service

    def post(self, request):
        data = json.loads(request.body.decode("utf-8"))
        first_name = data.get('first_name')
        last_name = data.get('last_name')
        email = data.get('email')
        password = data.get('password')

        if not first_name or not last_name or not email or not password:
            return HttpResponse(json.dumps({'detail': 'Invalid request'}), status=400)
        
        try:
            user = self.user_service.create(email=email, password=password, first_name=first_name, last_name=last_name)
        except UsernameAlreadyExistsException:
            return HttpResponse(json.dumps({'detail': 'Username already exists'}), status=400)
        except Exception as e:
            print(e)
            return HttpResponse(json.dumps({'detail': 'Something went wrong'}), status=500)

        data = json.dumps(user, cls=EnhancedJSONEncoder)
        return HttpResponse(data, status=201)
