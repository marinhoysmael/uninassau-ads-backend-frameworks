# Plano de Aula – Semana 4

**Disciplina:** Backend Frameworks
**Curso:** Análise e Desenvolvimento de Sistemas
**Tipo de Aula:** Prática
**Carga Horária:** 3 horas

---

# Tema da Aula

Estrutura de um projeto backend utilizando **MVC (Model-View-Controller)**, com foco na **implementação de Controllers** e **organização da aplicação em camadas**.

Durante a aula serão apresentados exemplos práticos utilizando **Java (Spring Boot)** e **Node.js (Express)**.

---

# Objetivos da Aula

## Objetivo Geral

Aplicar na prática a organização de aplicações backend utilizando o padrão arquitetural **MVC**, separando responsabilidades entre **controllers, services e repositories**.

---

## Objetivos Específicos

Ao final da aula, o estudante deverá ser capaz de:

* Compreender a estrutura de projetos backend baseados em MVC
* Identificar claramente as responsabilidades de cada camada da aplicação
* Implementar **controllers para APIs REST**
* Organizar um projeto backend seguindo boas práticas de arquitetura em camadas
* Criar endpoints simples utilizando frameworks backend

---

# Conteúdo Programático

## 1. Revisão do padrão MVC (20 minutos)

Breve retomada dos conceitos discutidos na aula anterior.

### Model

Responsável por representar os **dados da aplicação**.

Normalmente inclui:

* Estrutura das entidades
* Regras de negócio
* Mapeamento para banco de dados

Exemplo:

```
User
Product
Order
```

---

### View

Camada de **apresentação** da aplicação.

Em aplicações backend modernas (APIs REST), a View normalmente é representada por **JSON retornado ao cliente**.

Exemplo de resposta:

```json
{
  "id": 1,
  "name": "Notebook",
  "price": 3500
}
```

---

### Controller

Responsável por:

* Receber requisições HTTP
* Processar parâmetros da requisição
* Chamar serviços da aplicação
* Retornar respostas ao cliente

---

### Fluxo de uma requisição

```
Cliente
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Banco de Dados
```

---

# 2. Estrutura de Projeto Backend (30 minutos)

Uma boa organização de projeto melhora:

* Manutenção do código
* Testabilidade
* Escalabilidade da aplicação

---

## Estrutura comum em projetos Java (Spring Boot)

```
src
 ├── controller
 │    └── UserController.java
 │
 ├── service
 │    └── UserService.java
 │
 ├── repository
 │    └── UserRepository.java
 │
 ├── model
 │    └── User.java
 │
 └── Application.java
```

---

### Responsabilidades das camadas

| Camada     | Responsabilidade              |
| ---------- | ----------------------------- |
| Controller | Receber requisições HTTP      |
| Service    | Implementar regras de negócio |
| Repository | Acesso ao banco de dados      |
| Model      | Representação dos dados       |

---

## Estrutura comum em projetos Node.js

```
src
 ├── controllers
 │    └── userController.js
 │
 ├── services
 │    └── userService.js
 │
 ├── repositories
 │    └── userRepository.js
 │
 ├── models
 │    └── user.js
 │
 └── app.js
```

Essa separação segue os mesmos princípios utilizados em aplicações Java.

---

# 3. Implementação de Controllers (60 minutos)

Os **controllers** são responsáveis por expor **endpoints da API**.

Eles recebem requisições HTTP e delegam o processamento para os serviços.

---

## Exemplo em Java – Spring Boot

```java
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @GetMapping
    public List<User> findAll() {
        return service.findAll();
    }

    @PostMapping
    public User create(@RequestBody User user) {
        return service.create(user);
    }
}
```

### Responsabilidades do Controller

* Receber requisições HTTP
* Validar dados de entrada
* Delegar processamento para a camada de serviço
* Retornar respostas ao cliente

---

## Exemplo em Node.js – Express

```javascript
const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

router.get('/users', async (req, res) => {
    const users = await userService.findAll();
    res.json(users);
});

router.post('/users', async (req, res) => {
    const user = await userService.create(req.body);
    res.status(201).json(user);
});

module.exports = router;
```

Nesse exemplo:

* **Express Router** define os endpoints
* O **controller chama o service**
* O service executa a lógica da aplicação

---

# 4. Organização em Camadas (30 minutos)

A arquitetura em camadas permite separar responsabilidades dentro da aplicação.

---

## Controller

Responsável por:

* Receber requisições HTTP
* Extrair parâmetros
* Validar dados de entrada
* Chamar serviços da aplicação
* Retornar respostas

---

## Service

Responsável por:

* Implementar regras de negócio
* Orquestrar chamadas entre componentes
* Garantir integridade das operações

Exemplo:

```
UserService
ProductService
PaymentService
```

---

## Repository

Responsável por:

* Acesso ao banco de dados
* Persistência de dados
* Consulta de registros

Exemplo:

```
UserRepository
ProductRepository
OrderRepository
```

---

# Fluxo completo de uma operação

Exemplo: criação de usuário

```
POST /users

Cliente envia requisição
        ↓
Controller recebe requisição
        ↓
Controller chama UserService
        ↓
UserService executa regras
        ↓
UserService chama UserRepository
        ↓
Repository salva no banco
        ↓
Controller retorna resposta HTTP
```

---

# Atividade Prática (30 minutos)

Os alunos deverão implementar uma **API simples de cadastro de produtos**.

---

## Requisitos da API

Criar os seguintes endpoints:

```
GET /products
POST /products
```

---

## Estrutura esperada

```
productController
productService
productRepository
productModel
```

---

## Estrutura de dados do produto

Campos:

```
id
nome
preço
```

Exemplo de objeto:

```json
{
  "id": 1,
  "nome": "Mouse",
  "preco": 120
}
```

---

# Exercício Proposto

Cada grupo deverá:

1. Criar a estrutura de camadas do projeto
2. Implementar o **controller de produtos**
3. Criar um **service simples**
4. Simular um **repositório em memória**

---

# Encerramento da Aula (10 minutos)

Discussão com a turma.

Perguntas para reflexão:

* Qual a vantag
