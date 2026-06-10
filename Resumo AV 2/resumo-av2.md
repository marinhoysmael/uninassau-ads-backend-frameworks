# 📚 RESUMO PARA AV2 – FRAMEWORKS BACK-END

## Disciplina: Frameworks Back-end

### Conteúdo: Semanas 7 a 12

---

# 1. O QUE É UM FRAMEWORK?

Um framework é uma estrutura de software que fornece componentes reutilizáveis, padrões arquiteturais e mecanismos prontos para acelerar o desenvolvimento de aplicações.

O framework define uma forma organizada de construir sistemas, reduzindo a necessidade de implementar funcionalidades básicas repetidamente.

## Principais Vantagens

* Maior produtividade
* Padronização do código
* Reutilização de componentes
* Facilidade de manutenção
* Menor quantidade de código repetitivo
* Comunidade ativa e suporte

---

# 2. REQUISITOS PARA O DESENVOLVIMENTO DE UM FRAMEWORK

Um framework deve ser projetado para atender requisitos que garantam sua evolução e reutilização.

## Extensibilidade

Capacidade de adicionar novas funcionalidades sem alterar o código já existente.

### Exemplo

Um sistema de pagamentos possui suporte a PIX e Cartão de Crédito. Posteriormente, é necessário adicionar PayPal sem modificar os módulos existentes.

### Benefícios

* Facilita evolução do sistema
* Reduz risco de falhas
* Promove reutilização

---

## Modularidade

Capacidade de dividir o sistema em componentes independentes.

### Exemplo

Um framework pode ser dividido em:

* Módulo de autenticação
* Módulo de persistência
* Módulo de mensageria
* Módulo de auditoria

### Benefícios

* Baixo acoplamento
* Facilidade de manutenção
* Reutilização de módulos
* Maior organização

---

# 3. INVERSÃO DE CONTROLE (IoC)

## Conceito

Tradicionalmente, uma classe cria suas próprias dependências.

### Exemplo Tradicional

```java
PedidoRepository repository = new PedidoRepository();
```

Nesse caso, a própria classe controla a criação dos objetos.

Com IoC (Inversão de Controle), a responsabilidade pela criação e gerenciamento dos objetos passa para o framework.

O framework controla:

* Instanciação
* Configuração
* Ciclo de vida dos objetos
* Relacionamento entre componentes

## Benefícios

* Redução do acoplamento
* Maior flexibilidade
* Facilidade para testes
* Melhor manutenção

---

# 4. INJEÇÃO DE DEPENDÊNCIA (DI)

A Injeção de Dependência é uma das formas mais utilizadas para implementar a Inversão de Controle.

Ao invés de criar objetos manualmente, o framework fornece as dependências necessárias.

## Exemplo

### Forma Incorreta

```java
public class PedidoService {

    private PedidoRepository repository =
        new PedidoRepository();

}
```

### Forma Correta

```java
@Service
public class PedidoService {

    private final PedidoRepository repository;

    public PedidoService(PedidoRepository repository) {
        this.repository = repository;
    }

}
```

Nesse caso, o Spring injeta automaticamente a dependência.

---

# 5. SPRING CONTAINER

O Spring Container é o núcleo do Spring Framework.

Sua responsabilidade é:

* Criar objetos
* Configurar objetos
* Gerenciar ciclo de vida
* Realizar injeção de dependências

## Beans

Objetos gerenciados pelo Spring são chamados de Beans.

### Exemplo

```java
@Service
public class ClienteService {

}
```

A classe passa a ser gerenciada pelo Container do Spring.

---

# 6. SPRING BOOT

O Spring Boot é uma extensão do Spring Framework criada para simplificar o desenvolvimento de aplicações Java.

## Características

* Configuração automática (Auto Configuration)
* Servidor embutido
* Criação rápida de APIs REST
* Integração com banco de dados
* Gerenciamento simplificado de dependências

## Inicialização

```java
@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
```

---

# 7. ESTEREÓTIPOS DO SPRING

Os estereótipos indicam ao Spring quais classes devem ser gerenciadas pelo Container.

---

## @Component

Estereótipo genérico.

```java
@Component
public class EmailValidator {

}
```

---

## @Service

Representa a camada de negócio.

```java
@Service
public class ClienteService {

}
```

Responsável por:

* Regras de negócio
* Processamentos
* Validações

---

## @Repository

Representa a camada de persistência.

```java
@Repository
public class ClienteRepository {

}
```

Responsável por:

* Consultas
* Persistência
* Banco de dados

---

## @Controller

Responsável pelo recebimento de requisições.

```java
@Controller
public class ClienteController {

}
```

---

## @RestController

Utilizado em APIs REST.

```java
@RestController
@RequestMapping("/clientes")
public class ClienteController {

}
```

Retorna dados normalmente em JSON.

---

# 8. ARQUITETURA EM CAMADAS

Uma aplicação Spring Boot normalmente utiliza uma arquitetura em camadas.

## Estrutura

```text
Controller
    ↓
Service
    ↓
Repository
    ↓
Banco de Dados
```

---

## Controller

Responsável por:

* Receber requisições HTTP
* Retornar respostas HTTP

Exemplo:

```http
GET /clientes
```

---

## Service

Responsável por:

* Regras de negócio
* Validações
* Processamentos

---

## Repository

Responsável por:

* Persistência
* Consultas
* Acesso ao banco de dados

---

# 9. MODELAGEM DE UMA API

## Entidades

Representam os objetos do domínio da aplicação.

### Exemplos

* Cliente
* Produto
* Pedido
* Pagamento

---

## Endpoints REST

### Buscar Todos

```http
GET /clientes
```

### Buscar por ID

```http
GET /clientes/{id}
```

### Criar

```http
POST /clientes
```

### Atualizar

```http
PUT /clientes/{id}
```

### Excluir

```http
DELETE /clientes/{id}
```

---

# 10. INTEGRAÇÃO COM BANCO DE DADOS

O Spring Boot normalmente utiliza:

## JPA

(Java Persistence API)

Responsável pela padronização do acesso a dados em Java.

---

## Spring Data JPA

Facilita a criação de repositórios.

### Exemplo

```java
@Repository
public interface ClienteRepository
        extends JpaRepository<Cliente, Long> {

}
```

---

# 11. PRINCÍPIOS SOLID

SOLID é um conjunto de cinco princípios que ajudam a construir sistemas mais organizados, flexíveis e fáceis de manter.

---

## S — Single Responsibility Principle (SRP)

Uma classe deve possuir apenas uma responsabilidade.

### Incorreto

```java
ClienteService
```

Responsável por:

* Salvar cliente
* Enviar e-mail
* Gerar PDF

### Correto

Cada responsabilidade deve estar em uma classe específica.

---

## O — Open/Closed Principle (OCP)

Entidades devem ser:

* Abertas para extensão
* Fechadas para modificação

Novas funcionalidades devem ser adicionadas sem alterar código existente.

---

## L — Liskov Substitution Principle (LSP)

Objetos de uma classe derivada devem poder substituir objetos da classe base sem alterar o comportamento esperado.

---

## I — Interface Segregation Principle (ISP)

Interfaces devem ser específicas.

### Evitar

```java
interface Sistema {
    salvar();
    excluir();
    imprimir();
    exportar();
}
```

Nem todas as implementações utilizarão todos os métodos.

---

## D — Dependency Inversion Principle (DIP)

Dependa de abstrações e não de implementações.

### Incorreto

```java
PedidoService
    -> MysqlRepository
```

### Correto

```java
PedidoService
    -> PedidoRepository
```

(interface)

Isso reduz o acoplamento e aumenta a flexibilidade.

---

# RESUMO FINAL

## Conceitos Fundamentais

### Framework

* Estrutura reutilizável para desenvolvimento de software.

### Extensibilidade

* Adicionar funcionalidades sem alterar código existente.

### Modularidade

* Dividir o sistema em componentes independentes.

### IoC

* O framework controla a criação dos objetos.

### DI

* O framework fornece as dependências necessárias.

### Spring Container

* Gerencia Beans e realiza a injeção de dependências.

### Estereótipos Spring

* @Component
* @Service
* @Repository
* @Controller
* @RestController

### Arquitetura em Camadas

* Controller
* Service
* Repository

### SOLID

* SRP
* OCP
* LSP
* ISP
* DIP

### APIs REST

* GET
* POST
* PUT
* DELETE

### Persistência

* JPA
* Spring Data JPA

---

# MAPA MENTAL

```text
FRAMEWORK
│
├── Extensibilidade
├── Modularidade
│
├── Spring Boot
│   ├── Container
│   ├── Beans
│   ├── IoC
│   └── DI
│
├── Estereótipos
│   ├── @Component
│   ├── @Service
│   ├── @Repository
│   ├── @Controller
│   └── @RestController
│
├── Arquitetura
│   ├── Controller
│   ├── Service
│   └── Repository
│
└── SOLID
    ├── SRP
    ├── OCP
    ├── LSP
    ├── ISP
    └── DIP
```
