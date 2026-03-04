# 📘 Plano de Aula -- Semana 3 (Teórica -- 3h)

## Principais Frameworks Back-end, MVC e Arquitetura em Camadas

------------------------------------------------------------------------

## 🎯 Objetivos da Aula

Ao final da aula, o aluno deverá ser capaz de:

-   Compreender o que são frameworks back-end e suas responsabilidades.
-   Identificar os principais frameworks utilizados no mercado.
-   Entender o padrão arquitetural MVC.
-   Diferenciar responsabilidades dentro do MVC.
-   Compreender o conceito de arquitetura em camadas.
-   Relacionar MVC com arquitetura em camadas.

------------------------------------------------------------------------

# 1️⃣ Principais Frameworks Back-end

## 📌 O que é um Framework Back-end?

Framework back-end é uma estrutura que fornece:

-   Organização arquitetural
-   Gerenciamento de requisições HTTP
-   Integração com banco de dados
-   Segurança
-   Injeção de dependência
-   Padronização do desenvolvimento

Ele define como a aplicação deve ser estruturada.

------------------------------------------------------------------------

## 🔎 Exemplos de Frameworks Back-end

### ☕ Java

-   Spring Boot
-   Jakarta EE
-   Quarkus

Características: - Forte tipagem - Alto desempenho - Muito utilizado em
sistemas corporativos

------------------------------------------------------------------------

### 🟢 JavaScript / TypeScript

-   Express.js
-   NestJS
-   Fastify

Características: - Alta produtividade - Grande ecossistema - Popular em
APIs REST e microsserviços

------------------------------------------------------------------------

### 🐍 Python

-   Django
-   FastAPI

Características: - Rápido desenvolvimento - Muito utilizado em APIs e
aplicações com IA

------------------------------------------------------------------------

### 🟣 PHP

-   Laravel

Características: - Forte presença em sistemas web - Simplicidade de uso

------------------------------------------------------------------------

## 📊 Critérios para Comparação entre Frameworks

-   Performance
-   Curva de aprendizado
-   Ecossistema
-   Comunidade
-   Facilidade de deploy
-   Arquitetura suportada

------------------------------------------------------------------------

# 2️⃣ MVC -- Model View Controller

## 📌 Conceito

MVC é um padrão arquitetural que separa a aplicação em três
responsabilidades principais:

-   Model
-   View
-   Controller

O objetivo é separar responsabilidades e facilitar manutenção e evolução
do sistema.

------------------------------------------------------------------------

## 🧠 Model

Responsável por:

-   Regras de negócio
-   Representação de entidades
-   Comunicação com banco de dados
-   Validações de domínio

------------------------------------------------------------------------

## 🎨 View

Responsável por:

-   Interface com o usuário
-   Apresentação dos dados
-   Formatação de resposta (HTML, JSON, etc.)

------------------------------------------------------------------------

## 🎮 Controller

Responsável por:

-   Receber requisições HTTP
-   Orquestrar chamadas ao Model
-   Retornar a resposta adequada

------------------------------------------------------------------------

## 🔄 Fluxo de Funcionamento do MVC

1.  Cliente envia requisição
2.  Controller recebe a requisição
3.  Controller chama o Model
4.  Model executa regras e retorna dados
5.  Controller devolve resposta via View

------------------------------------------------------------------------

# 3️⃣ Arquitetura em Camadas

## 📌 Conceito

Arquitetura em camadas é um modelo organizacional onde a aplicação é
dividida em camadas com responsabilidades específicas.

Cada camada depende apenas da camada imediatamente inferior.

------------------------------------------------------------------------

## 🏗️ Exemplo Clássico de Camadas

-   Camada de Apresentação
-   Camada de Aplicação
-   Camada de Domínio
-   Camada de Infraestrutura

------------------------------------------------------------------------

## 📌 Camada de Apresentação

-   Controllers
-   Endpoints
-   DTOs
-   Conversão de dados

------------------------------------------------------------------------

## 📌 Camada de Aplicação

-   Casos de uso
-   Orquestração
-   Coordenação entre serviços

------------------------------------------------------------------------

## 📌 Camada de Domínio

-   Entidades
-   Regras de negócio
-   Serviços de domínio

------------------------------------------------------------------------

## 📌 Camada de Infraestrutura

-   Banco de dados
-   Implementações de repositório
-   Integrações externas
-   Mensageria

------------------------------------------------------------------------

# 4️⃣ Relação entre MVC e Arquitetura em Camadas

MVC organiza a aplicação na perspectiva da interface.

Arquitetura em camadas organiza o sistema na perspectiva estrutural
interna.

Em muitos frameworks:

-   Controller → Camada de Apresentação
-   Model → Pode estar na Camada de Domínio
-   Serviços → Camada de Aplicação
-   Repositórios → Camada de Infraestrutura

------------------------------------------------------------------------

# 📚 Atividade Sugerida em Sala

1.  Escolher um framework estudado.
2.  Identificar:
    -   Onde está o Controller?
    -   Onde está o Model?
    -   Como o framework organiza camadas?
3.  Discutir se o framework força arquitetura ou apenas sugere.

------------------------------------------------------------------------

# 🧩 Perguntas para Debate

-   MVC ainda faz sentido em APIs modernas?
-   Onde colocar regra de negócio?
-   Controller pode acessar diretamente o banco?
-   Framework define arquitetura ou apenas estrutura?

------------------------------------------------------------------------

# 📌 Fechamento da Aula

-   Frameworks organizam o desenvolvimento.
-   MVC separa responsabilidades.
-   Arquitetura em camadas organiza o sistema internamente.
-   Boa arquitetura reduz acoplamento e aumenta manutenibilidade.
