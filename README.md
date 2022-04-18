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

Backlog de tarefas disponível no [Trello](https://trello.com/b/FBUHFzwk/pds-prework).

### Gerenciamento de estações de trabalho
- **Como** usuário administrador **quero** cadastrar salas de estações de trabalho **para** que os clientes possam reservá-las

- **Como** usuário administrador **quero** editar e deletar salas de estações de trabalho **para** manter os dados das salas atualizados

- **Como** usuário administrador **quero** visualizar uma listagem das salas de estações de trabalho existentes **para** facilitar o gerenciamento das salas

- **Como** usuário administrador **quero** cadastrar estações de trabalho **para** que eu possa adicioná-las a uma sala

- **Como** usuário administrador **quero** associar estações de trabalho a uma sala **para** que os clientes possam reservar os assentos desejados

### Gerenciamento de salas de reunião 

- **Como** usuário administrador **quero** cadastrar salas de reunião **para** que os clientes possam reservá-las

- **Como** usuário administrador **quero** editar e deletar salas de reunião **para** manter os dados das salas atualizados

- **Como** usuário administrador **quero** visualizar uma listagem das salas de reunião existentes **para** facilitar o gerenciamento das salas

- **Como** usuário administrador **quero** visualizar os detalhes de uma sala de reunião **para** verificar os dados cadastrados

### Reserva de salas
- **Como** usuário do PreWork **quero** reservar estações de trabalho **para** que eu possa trabalhar presencialmente em um local específico

- **Como** usuário do PreWork **quero** reservar salas de reunião **para** que eu e outros colegas possa trabalhar presencialmente em um local específico