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

Com a pandemia do Covid-19, diversas empresas adotaram um regime remoto ou híbrido, o que causou o crescimento da procura por coworkings por parte dos funcionários e necessidade de gerenciamento do espaço de escritórios para empresas híbridas.

Essas empresas com escritórios híbridos e coworkings realizam um trabalho manual para gerir usuários e agendamentos de mesas e salas de reuniões, muitas vezes de maneira informal (por chats ou formulários próprios) que serão processados manualmente, causando uma sobrecarga no time de operações e recursos humanos. Porém, a hipótese do PreWork é que elas não gostariam de ter esse gasto e estariam dispostas a contratar um serviço para resolver o problema por elas.

Para a validação do PreWork, decidimos realizar um MVP Mágico de Oz, em que será disponibilizado um formulário simples para os usuários realizarem as requisições de locação de sala de reunião ou espaço de trabalho, que serão processadas manualmente pela nossa equipe, de forma a remover o esforço operacional da empresa ou coworking.

O MVP será disponibilizado para poucas unidades de empresas híbridas e poucas unidades de coworkings, o que nos permitirá validar a nossa hipótese, assim como compreender quais as maiores necessidades de cada um dos dois tipos de cliente e quanto interesse eles apresentam à solução fornecida.

## Protótipo

Protótipo disponível no [Figma](https://www.figma.com/file/KKFnCoqbvlcWkHjRBEAtyd/Prework).

## Backlog da Sprint

### Tarefas técnicas

- Fazer setup do projeto de backend em Django (Paula)
- Criar docker para projeto de backend (Paula)
- Fazer setup do projeto de frontend em React (Luís)

### Gerenciamento de estações de trabalho

- **Como** usuário administrador **quero** cadastrar salas de estações de trabalho **para** que os clientes possam reservá-las (Victor)
- **Como** usuário administrador **quero** editar e deletar salas de estações de trabalho **para** manter os dados das salas atualizados (Victor)
- **Como** usuário administrador **quero** visualizar uma listagem das salas de estações de trabalho existentes **para** facilitar o gerenciamento das salas (Victor)
- **Como** usuário administrador **quero** cadastrar estações de trabalho **para** que eu possa adicioná-las a uma sala (Luís)
- **Como** usuário administrador **quero** associar estações de trabalho a uma sala **para** que os clientes possam reservar os assentos desejados (Luís)

### Gerenciamento de salas de reunião

- **Como** usuário administrador **quero** cadastrar salas de reunião **para** que os clientes possam reservá-las (Fernanda)
- **Como** usuário administrador **quero** editar e deletar salas de reunião **para** manter os dados das salas atualizados (Fernanda)
- **Como** usuário administrador **quero** visualizar uma listagem das salas de reunião existentes **para** facilitar o gerenciamento das salas (Fernanda)
- **Como** usuário administrador **quero** visualizar os detalhes de uma sala de reunião **para** verificar os dados cadastrados (Paula)

### Reserva de salas

- **Como** usuário do PreWork **quero** reservar estações de trabalho **para** que eu possa trabalhar presencialmente em um local específico (Eduardo)
- **Como** usuário do PreWork **quero** reservar salas de reunião **para** que eu e outros colegas possam trabalhar presencialmente em um local específico (Eduardo)


## Backlog do Produto

Backlog de tarefas disponível também no [Trello](https://trello.com/b/FBUHFzwk/pds-prework).
