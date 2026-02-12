# Aula 01 – Introdução a Backend e Frameworks

## 1. Apresentação da Disciplina

- A disciplina possui **80 horas**, divididas entre teoria e prática.
- O foco será em **frameworks de desenvolvimento backend**.
- Haverá momentos de fundamentação teórica e aplicação prática.
- Parte do aprendizado dependerá de estudo complementar fora de sala.

A proposta é compreender não apenas “como usar” um framework, mas **por que ele funciona da forma que funciona**, entendendo seus fundamentos arquiteturais.

---

## 2. Revisão de Conceitos Fundamentais

Antes de entrar diretamente em frameworks, foi reforçada a importância de:

- Dominar os **fundamentos da linguagem**
- Entender **orientação a objetos**
- Conhecer **arquitetura de software**
- Compreender padrões e boas práticas

Foi enfatizado que saber apenas a sintaxe de uma linguagem não é suficiente.  
É necessário entender conceitos como:

- Classes
- Objetos
- Métodos
- Organização em camadas
- Separação de responsabilidades

Frameworks são construídos sobre esses fundamentos.

---

## 3. Definição Técnica de Framework

Framework é:

> Um conjunto de componentes, bibliotecas e padrões arquiteturais que fornece uma base reutilizável para o desenvolvimento de aplicações, invertendo o controle do fluxo de execução.

Elementos centrais:

- Estrutura pré-definida
- Padrões arquiteturais
- Componentes prontos
- Inversão de controle

---

## 4. Biblioteca x Framework

### Biblioteca

- O desenvolvedor controla o fluxo.
- Ele chama a biblioteca quando precisa.
- Não impõe arquitetura.
- Maior flexibilidade.
- Curva de aprendizado menor.

Exemplos mencionados:
- JDBC (conexão com banco no Java)
- Axios (requisições HTTP no Node)
- Jackson / Gson (manipulação de JSON)

---

### Framework

- O framework controla o fluxo.
- Define arquitetura.
- Impõe padrões.
- Possui curva de aprendizado maior.
- Trabalha com **inversão de controle**.

Exemplos citados:
- Spring Boot (Java)
- Express (Node.js)
- NestJS (Node.js)
- Django (Python)
- Flask (Python)
- Laravel (PHP)
- ASP.NET (.NET/C#)

---

## 5. Inversão de Controle (IoC)

Foi explicado que, em aplicações tradicionais:

- O desenvolvedor escreve o ponto de entrada (ex: método `main`)
- Ele inicializa manualmente dependências
- Controla explicitamente o fluxo

Com frameworks:

- O framework já possui um mecanismo de inicialização.
- O desenvolvedor apenas configura e declara componentes.
- O framework chama o código do desenvolvedor.

Exemplo citado:
- Uso de anotações como `@SpringBootApplication` no Spring Boot.
- O framework inicializa automaticamente a aplicação.

---

## 6. Arquitetura Cliente-Servidor

Foi retomado o conceito de:

- Cliente (navegador, celular, outro sistema)
- Servidor (backend)

Fluxo básico:

1. Cliente envia requisição (request).
2. Servidor processa.
3. Servidor envia resposta (response).

O protocolo utilizado é o **HTTP**.

---

## 7. O que o HTTP Transporta

Foi reforçado que:

- O HTTP trafega essencialmente **texto**.
- O navegador interpreta principalmente:
  - HTML
  - CSS
  - JavaScript

Linguagens como:

- Java
- C#
- Python
- Node.js
- PHP

não são interpretadas diretamente pelo navegador.

Essas linguagens precisam de:

- Um **servidor de aplicação**
- Um ambiente de execução

Exemplos mencionados:

- Java → compilado em bytecode → interpretado pela JVM.
- Necessidade de servidores como Tomcat para aplicações Java.
- Node.js como ambiente de execução JavaScript no backend.

---

## 8. Estrutura de Inicialização de Aplicações

Foi discutido que toda aplicação backend possui:

- Um ponto de entrada (ex: `main` no Java)
- Um processo de inicialização

Sem framework:
- O desenvolvedor precisa configurar manualmente:
  - Conexão com banco
  - Servidor
  - Rotas
  - Serialização

Com framework:
- Muito disso já vem configurado.
- O desenvolvedor apenas declara o que precisa.

---

## 9. Padrões Arquiteturais Utilizados por Frameworks

### MVC – Model, View, Controller

- **Model** → Dados e regras de negócio.
- **View** → Apresentação.
- **Controller** → Recebe requisições e coordena a aplicação.

Foi destacado que a maioria dos frameworks web utiliza esse padrão ou alguma variação dele.

---

### DDD – Domain Driven Design

Foi mencionado que frameworks modernos utilizam conceitos como:

- Entidades
- Serviços
- Repositórios

Exemplo discutido:
- O padrão **Repository**, responsável por abstrair a persistência de dados.

---

## 10. ORM (Object-Relational Mapping)

Ao trabalhar com banco de dados, geralmente utiliza-se um framework ou ferramenta de mapeamento objeto-relacional.

Exemplos mencionados:

- Hibernate
- Spring Data

Essas ferramentas:

- Mapeiam classes para tabelas
- Automatizam persistência
- Reduzem código repetitivo

---

## 11. Framework como Conjunto de Ferramentas

Foi destacado que:

- Um projeto pode utilizar vários frameworks simultaneamente.
- Exemplo:
  - Framework web
  - Framework de persistência
  - Framework de segurança

Isso pode ser:
- Uma vantagem (produtividade)
- Um risco (complexidade excessiva)

---

## 12. Escolha de Linguagem e Framework

A escolha depende de:

- Tipo de sistema (Web, Mobile, Embarcado, API, etc.)
- Requisitos funcionais
- Requisitos não funcionais
- Conhecimento da equipe
- Escalabilidade necessária

Exemplos discutidos:

- Aplicações Web → Java, Node, Python, PHP, C#.
- Android → Kotlin.
- iOS → Swift.

A tecnologia deve ser escolhida com base no problema a ser resolvido.

---

## 13. Importância dos Fundamentos

Foi reforçado que:

- Framework não substitui conhecimento de base.
- É possível conhecer profundamente uma linguagem e ainda assim não dominar conceitos como orientação a objetos.
- Frameworks utilizam princípios como:
  - SOLID
  - Design Patterns
  - Separação de responsabilidades

Dominar fundamentos facilita aprender qualquer framework.

---

## 14. Vantagens do Uso de Frameworks

- Produtividade acelerada
- Código reutilizável
- Padrões consolidados
- Redução de tempo de desenvolvimento
- Foco na regra de negócio

Em vez de resolver problemas já conhecidos (infraestrutura, inicialização, conexão), o desenvolvedor pode focar na solução do domínio.

---

## 15. Encaminhamento para as Próximas Aulas

Foi informado que nas próximas aulas serão abordados:

- Preparação do ambiente de desenvolvimento
- Instalação de ferramentas (Java, Node, etc.)
- Primeiro contato prático com um framework backend

A continuidade seguirá a ementa da disciplina, priorizando frameworks amplamente utilizados no mercado.
