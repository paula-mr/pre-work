# PreWork

Sistema de gerenciamento de espaços de trabalho compartilhados e de agendamento da utilização de estações de trabalho.

Projeto desenvolvido para a disciplina Prática em Desenvolvimento de Software 2022/1 da UFMG.

## Equipe

- Eduardo de Paiva Dias - Desenvolvedor de Software Frontend
- Fernanda Rocha de Morais Gonçalves - Desenvolvedora de Software Fullstack
- Luis Fernando Camargos Carvalho - Desenvolvedor de Software Frontend
- Paula Mara Ribeiro - Desenvolvedora de Software Fullstack
- Victor Gabriel Ferreira Moraes - Desenvolvedor de Software Fullstack

## Escopo

O PreWork é uma solução web para coworkings e escritórios realizarem o gerenciamento virtual de suas mesas compartilhadas, de forma a permitir que seus usuários reservem mesas de forma fácil e prática.

Suas principais funcionalidades incluem:

- Gestão de estações de trabalho e salas de reunião (adicionar, editar, deletar e listar)
- Realização de reservas de estação de trabalho ou salas

## Tecnologias

- Frontend: Typescript, com auxílio da biblioteca React
- Backend: Python utilizando o framework de desenvolvimento web Django
- Banco de dados: Postgresql e Django ORM

## MVP

Para a validação do PreWork, decidimos realizar um MVP Mágico de Oz, em que será disponibilizado um formulário simples para os usuários realizarem as requisições de locação de sala de reunião ou espaço de trabalho, e estas serão processadas manualmente pela nossa equipe, de forma a remover o esforço operacional da empresa ou coworking.

O MVP será disponibilizado para poucas unidades de empresas híbridas e poucas unidades de coworkings, o que nos permitirá validar a nossa hipótese, assim como compreender quais as maiores necessidades de cada um dos dois tipos de cliente e quanto interesse eles apresentam à solução fornecida.

## Backlog do Produto

Backlog disponível no [Trello](https://trello.com/b/FBUHFzwk/pds-prework).

#### In Progress
- Criar protótipós das interfaces 
- Desenvolver MVP

#### Backlog (Front-End)
- Implementar página inicial (Admin)
- Implementar página de cadastro de estações de trabalho
- Implementar listagem de estações de trabalho
- Implementar página de cadastro de salas de reunião
- Implementar listagem de salas de reunião
- Implementar edição de sala de reunião
- Implementar exclusão de sala de reunião
- Implementar edição das estações de trabalho
- Implementar exclusão das estações de trabalho
- Implementar página de detalhes da sala de reunião
- Implementar página inicial (Cliente)
- Implementar página de reserva de estações de trabalho
- Implementar página de reserva de salas de reunião
- Implementar página de salas indisponíveis

#### Backlog (Banco de Dados)
- Criar tabela de salas de reunião
- Criar tabela de sala de estações de trabalho
- Criar tabela de estações de trabalho
- Criar tabela de usuários
- Criar tabela de reserva de estações de trabalho
- Criar tabela de reserva de salas de reunião


#### Backlog (Back-End)
 - Criar endpoint GET para salas de reunião
 - Criar endpoint POST para salas de reunião
 - Criar endpoint PUT para salas de reunião
 - Criar endpoint DELETE para salas de reunião
 - Criar endpoint GET (all) salas de reunião
 - Criar endpoint GET para sala de estação de trabalho
 - Criar endpoint POST para sala de estação de trabalho
 - Criar endpoint PUT para sala de estação de trabalho
 - Criar endpoint DELETE para sala de estação de trabalho
 - Criar endpoint GET (all) salas de estações de trabalho
 - Criar endpoint POST para reserva de estações de trabalho
 - Criar endpoint GET para reserva de estações de trabalho
 - Criar endpoint PUT para reserva de estações de trabalho
 - Criar endpoint DELETE para reserva de estações de trabalho
 - Criar endpoint GET (all) para reserva de estações de trabalho
 - Criar endpoint POST para reserva de salas de reunião
 - Criar endpoint GET para reserva de salas de reunião
 - Criar endpoint PUT para reserva de salas de reunião
 - Criar endpoint DELETE para reserva de salas de reunião
  - Criar endpoint GET (all) para reserva salas de reunião
