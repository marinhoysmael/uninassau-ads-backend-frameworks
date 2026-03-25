# 📘 Plano de Aula – Semana 6

**Data:** 25/03/2026  
**Tipo:** Prática  
**Duração:** 3h  

---

## 🎯 Tema
Criação de uma API simples utilizando framework back-end

---

## 🎯 Objetivos de Aprendizagem

Ao final da aula, os alunos deverão ser capazes de:

- Criar uma API REST básica utilizando um framework back-end  
- Estruturar um projeto seguindo boas práticas (camadas básicas)  
- Implementar endpoints HTTP (GET, POST)  
- Compreender o fluxo de requisição e resposta  
- Testar endpoints com ferramentas apropriadas  

---

## 🧠 Conteúdos

- Estrutura básica de projetos back-end  
- API REST (conceito e prática)  
- Rotas e Controllers  
- Services (regra de negócio)  
- JSON e HTTP  
- Organização em camadas  

---

## 🛠️ Tecnologias Sugeridas

- Node.js + Express  
ou  
- Java + Spring Boot  

---

## 📚 Metodologia

A aula será conduzida de forma prática com desenvolvimento guiado:

1. Explicação do problema  
2. Criação do projeto  
3. Implementação passo a passo  
4. Testes em tempo real  
5. Exercício prático  

---

## 🧩 Roteiro da Aula

### 🔹 1. Contextualização (20 min)

Cenário:

> Uma empresa precisa de uma API simples para gerenciar usuários.

Funcionalidades:

- Criar usuário  
- Listar usuários  

---

### 🔹 2. Setup do Projeto (30 min)

- Criar projeto base  
- Instalar dependências  
- Subir servidor local  
- Criar endpoint inicial `/health`  

---

### 🔹 3. Implementação da API (1h30)

#### 📌 Estrutura sugerida:

- controller/
- service/
- repository/ (opcional)

---

#### 📌 Endpoints:

**GET /users**
- Retorna lista de usuários (em memória)

**POST /users**
- Cria novo usuário

---

#### 📌 Exemplo de requisição:

```json
{
  "name": "João",
  "email": "joao@email.com"
}
```

---

### 🔹 4. Testes (20 min)

- Postman ou Insomnia  
- Testar:
  - Criação de usuário  
  - Listagem  
  - Dados inválidos  

---

### 🔹 5. Evolução (20 min)

Melhorias sugeridas:

- Validação de dados  
- GET por ID  
- Organização do código  

---

## 📝 Atividade Prática

Desenvolver uma API com:

- 2 endpoints obrigatórios (GET e POST)  
- Estrutura em camadas  
- Testes realizados  

Entrega:

- Código no GitHub  

---

## ✅ Critérios de Avaliação

| Critério | Descrição |
|--------|--------|
| Estrutura | Organização em camadas |
| Funcionalidade | Endpoints funcionando |
| Código | Clareza e legibilidade |
| Testes | Execução via ferramenta |

---

## 💬 Perguntas Norteadoras

- O que é uma API REST?  
- Qual o papel do controller?  
- Onde fica a regra de negócio?  
- Por que separar em camadas?  

---

## 🚀 Extensões

- Persistência em banco  
- Validação com biblioteca  
- Middleware de erro  
- Versionamento de API  

---

## 📎 Recursos

- Documentação oficial do framework  
- Postman / Insomnia  
