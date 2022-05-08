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
