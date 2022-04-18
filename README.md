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
- **Como** usuário administrador
- **Quero** cadastrar salas de estações de trabalho
- **Para** que os clientes possam reservá-las

- **Como** usuário administrador
- **Quero** editar salas de estações de trabalho
- **Para** manter os dados das salas atualizados

- **Como** usuário administrador
- **Quero** deletar salas de estações de trabalho
- **Para** manter os dados das salas atualizados

- **Como** usuário administrador
- **Quero** visualizar uma listagem das salas de estações de trabalho existentes
- **Para** facilitar o gerenciamento das salas

- **Como** usuário administrador
- **Quero** cadastrar estações de trabalho
- **Para** que eu possa adicioná-las a uma sala

- **Como** usuário administrador
- **Quero** associar estações de trabalho a uma sala
- **Para** que os clientes possam reservar os assentos desejados

### Gerenciamento de salas de reunião 

- **Como** usuário administrador
- **Quero** cadastrar salas de reunião
- **Para** que os clientes possam reservá-las

- **Como** usuário administrador
- **Quero** visualizar os detalhes de uma sala de reunião
- **Para** verificar os dados cadastrados

- **Como** usuário administrador
- **Quero** editar salas de reunião
- **Para** manter os dados das salas atualizados

- **Como** usuário administrador
- **Quero** deletar salas de reunião
- **Para** manter os dados das salas atualizados

- **Como** usuário administrador
- **Quero** visualizar uma listagem das salas de reunião existentes
- **Para** facilitar o gerenciamento das salas

### Gerenciamento de salas de reunião 
- **Como** usuário do PreWork
- **Quero** reservar estações de trabalho
- **Para** que eu possa trabalhar presencialmente em um local específico

- **Como** usuário do PreWork
- **Quero** reservar salas de reunião
- **Para** que eu e outros colegas possa trabalhar presencialmente em um local específico