from django.views import View
from django.http import HttpResponse
import json

from src.utils import EnhancedJSONEncoder

from src.user.domain.ilogin import ILogin
from src.user.adapters.exceptions import NoUserFoundException

## Oferece acesso ao sistema via Web/REST
## Considerado um adaptador em Arquitetura Hexagonal
class UserApi(View):
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
