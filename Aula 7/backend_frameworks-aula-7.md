# Plano de Aula -- Semana 7

**Disciplina:** Backend Frameworks\
**Curso:** Análise e Desenvolvimento de Sistemas\
**Data:** 15/04/2026\
**Tipo de Aula:** Teórica + Discussão + Exercício conceitual

**Tema da Aula:**\
Requisitos para o desenvolvimento de um framework: extensibilidade,
modularidade e inversão de controle.

------------------------------------------------------------------------

# 1. Objetivos da Aula

Ao final da aula o estudante deverá ser capaz de:

-   Compreender o que caracteriza um **framework de software**.
-   Identificar os **requisitos fundamentais para criação de um
    framework**.
-   Entender os conceitos de **modularidade** e **extensibilidade**.
-   Compreender o conceito de **Inversão de Controle (IoC)**.
-   Diferenciar **frameworks de bibliotecas tradicionais**.
-   Reconhecer como frameworks modernos implementam esses conceitos.

------------------------------------------------------------------------

# 2. Introdução

Frameworks são estruturas reutilizáveis que fornecem uma base para o
desenvolvimento de aplicações.

Eles definem:

-   arquitetura
-   fluxo de execução
-   pontos de extensão
-   padrões de desenvolvimento

Diferente de bibliotecas, frameworks **controlam o fluxo da aplicação**.

Esse princípio é conhecido como:

**Hollywood Principle**

> "Don't call us, we'll call you."

------------------------------------------------------------------------

# 3. Requisitos para o Desenvolvimento de um Framework

Para que um software seja considerado um framework, ele geralmente
apresenta os seguintes requisitos:

### 1. Arquitetura bem definida

O framework precisa definir:

-   estrutura do projeto
-   organização dos componentes
-   fluxo de execução da aplicação

------------------------------------------------------------------------

### 2. Pontos de extensão

Um framework deve permitir que desenvolvedores **customizem seu
comportamento**.

Exemplos:

-   plugins
-   middlewares
-   interceptadores
-   hooks
-   componentes substituíveis

------------------------------------------------------------------------

### 3. Reutilização

Frameworks devem permitir reutilização de:

-   código
-   padrões arquiteturais
-   infraestrutura

------------------------------------------------------------------------

### 4. Controle do fluxo da aplicação

O framework controla:

-   ciclo de vida da aplicação
-   processamento de requisições
-   inicialização de componentes

------------------------------------------------------------------------

# 4. Modularidade

Modularidade é a capacidade de dividir um sistema em **componentes
independentes**.

Cada módulo possui:

-   responsabilidade específica
-   baixo acoplamento
-   alta coesão

## Benefícios da modularidade

-   facilita manutenção
-   permite evolução independente de módulos
-   melhora organização do código
-   facilita testes

### Exemplo de modularidade

    core
    web
    data
    security
    logging

------------------------------------------------------------------------

# 5. Extensibilidade

Extensibilidade é a capacidade de **adicionar novos comportamentos ao
framework sem modificar seu núcleo**.

Isso permite que desenvolvedores:

-   personalizem funcionalidades
-   criem novos componentes
-   adaptem o framework a diferentes cenários

### Exemplos

-   plugins
-   middlewares
-   interceptors
-   adapters
-   modules

------------------------------------------------------------------------

# 6. Inversão de Controle (IoC)

Inversão de Controle é um princípio onde o **framework controla o fluxo
da aplicação**, e não o desenvolvedor.

Aplicação tradicional:

    Aplicação chama biblioteca

Framework:

    Framework chama código da aplicação

------------------------------------------------------------------------

# 7. Comparação: Biblioteca vs Framework

## Biblioteca

    main()
       ↓
    application code
       ↓
    library

O programador controla o fluxo.

## Framework

    framework
       ↓
    application code

O framework controla o fluxo.

------------------------------------------------------------------------

# 8. Diagrama -- Inversão de Controle

``` plantuml
@startuml

actor Developer

Developer -> Framework : configura aplicação

Framework -> Application : chama código do usuário
Application --> Framework : retorna resposta

@enduml
```

------------------------------------------------------------------------

# 9. Mini exemplo de Framework (Pseudocódigo)

## Core do Framework

``` pseudo
class Framework

    routes = {}

    function addRoute(path, handler)
        routes[path] = handler

    function start()

        request = waitRequest()

        handler = routes[request.path]

        response = handler(request)

        sendResponse(response)
```

## Código do Desenvolvedor

``` pseudo
framework = new Framework()

framework.addRoute("/hello", function(req){

    return "Hello World"

})

framework.start()
```

Explicação: o framework controla o fluxo da aplicação.

------------------------------------------------------------------------

# 10. Arquitetura de um Framework

``` plantuml
@startuml

package Framework {

  [Core]
  [Routing]
  [Extensions]
  [HTTP Server]

}

package Application {

  [User Code]

}

User Code --> Extensions
Extensions --> Core
Core --> Routing
Routing --> HTTP Server

@enduml
```

------------------------------------------------------------------------

# 11. Fluxo de Requisição em um Framework

``` plantuml
@startuml

actor Client

Client -> Framework : HTTP Request

Framework -> Middleware : pre-processing

Middleware -> Router : route request

Router -> Controller : execute handler

Controller --> Framework : response

Framework --> Client : HTTP Response

@enduml
```

------------------------------------------------------------------------

# 12. Modularidade de um Framework

``` plantuml
@startuml

package Framework {

  package Core
  package Routing
  package Security
  package Data
  package Extensions

}

Core --> Routing
Core --> Security
Core --> Data

Extensions --> Core

@enduml
```

------------------------------------------------------------------------

# 13. Atividade em Sala

## Desafio

Criar a arquitetura conceitual de um **mini framework web**.

O framework deve permitir:

-   registro de rotas
-   processamento de requisições
-   retorno de respostas

### Requisitos

**Core** - iniciar servidor - controlar fluxo da aplicação

**Sistema de rotas**

    GET /users
    GET /products
    POST /orders

**Sistema de extensões**

    middleware
    plugins
    interceptadores

**Modularidade**

    core
    router
    extensions
    http

------------------------------------------------------------------------

# 14. Entrega Esperada

Cada grupo deve apresentar:

1.  Arquitetura do framework
2.  Fluxo de requisição
3.  Módulos do sistema
4.  Pontos de extensão

------------------------------------------------------------------------

# 15. Conceitos-chave

    Modularidade
    Extensibilidade
    Inversão de Controle

------------------------------------------------------------------------

# 16. Referências

Gamma, E. **Design Patterns**\
Fowler, Martin. **Patterns of Enterprise Application Architecture**\
Pressman, Roger. **Engenharia de Software**
