# PreWork backend

Aplicação desenvolvida em Django com apoio do Docker para desenvolvimento local.

## Executando

Para executar a aplicação, é preciso ter o Docker instalado e rodar:

`` docker-compose up ``

É preciso também manter a base de dados, para isso basta entrar no container web do docker:

`` docker exec -it backend-web-1 bash ``

E para gerar migrações do banco de dados, executar:

`` python manage.py makemigrations ``

E para aplicá-las:

`` python manage.py migrate ``

## Acessando o Django Admin

A primeira vez que o projeto é executado, é necessário criar um usuário de acesso ao Django Admin. Para isso, rode e siga as instruções:

`` python manage.py createsuperuser ``

Depois, basta acessar `http://localhost:8000/admin/` para ter acesso às funções de admin.
