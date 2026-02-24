# 📚 Semana 2 -- Aula Prática (4h)

## Disciplina: Frameworks Backend

## Tema: Preparação do Ambiente + Primeiro Contato com Framework

------------------------------------------------------------------------

# Objetivos da Aula

Ao final da aula, o aluno deverá:

-   Configurar ambiente backend básico
-   Entender o papel do runtime
-   Criar uma API HTTP simples sem framework
-   Criar a mesma API usando framework
-   Perceber o ganho de produtividade e organização

------------------------------------------------------------------------

# Roteiro da Aula (4h)

------------------------------------------------------------------------

# 🔹 1ª Hora -- Preparação do Ambiente

## 1.1 Conceitos Iniciais

-   O que é runtime
-   O que é servidor HTTP
-   O que é API REST
-   O que é framework

------------------------------------------------------------------------

## 1.2 Instalação de Ferramentas

### Node.js

``` bash
node -v
npm -v
```

### Java

``` bash
java -version
javac -version
```

### IDEs sugeridas

-   VSCode
-   IntelliJ
-   Eclipse

------------------------------------------------------------------------

# 🔹 2ª Hora -- Criando API com Node.js Puro

## Criando o arquivo `server.js`

``` javascript
const http = require('http');

const server = http.createServer((req, res) => {
    
    if (req.url === '/hello' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello World' }));
        return;
    }

    res.writeHead(404);
    res.end();
});

server.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
```

### Executar

``` bash
node server.js
```

### Testar no navegador

    http://localhost:3000/hello

------------------------------------------------------------------------

## Discussão com a Turma

Refletir:

-   O que acontece se quisermos 10 rotas?
-   Como tratar erros?
-   Como organizar código?
-   Como adicionar middleware?
-   Como validar dados?

------------------------------------------------------------------------

# 🔹 3ª Hora -- Criando API com Express

## Inicializando projeto

``` bash
npm init -y
npm install express
```

## Criando arquivo `app.js`

``` javascript
const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
```

### Executar

``` bash
node app.js
```

------------------------------------------------------------------------

## Comparação Node Puro vs Express

  Node Puro         Express
  ----------------- ----------------------
  Código verboso    Código enxuto
  Controle manual   Abstração pronta
  Sem organização   Estrutura organizada
  Mais complexo     Mais produtivo

------------------------------------------------------------------------

# 🔹 4ª Hora -- Java Puro vs Spring Boot

------------------------------------------------------------------------

## Java com HTTP Puro

Arquivo `SimpleServer.java`:

``` java
import com.sun.net.httpserver.HttpServer;
import com.sun.net.httpserver.HttpExchange;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class SimpleServer {

    public static void main(String[] args) throws Exception {
        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        server.createContext("/hello", (HttpExchange exchange) -> {
            String response = "{\"message\":\"Hello World\"}";
            exchange.sendResponseHeaders(200, response.length());
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
        });

        server.start();
        System.out.println("Servidor rodando na porta 8080");
    }
}
```

### Testar

    http://localhost:8080/hello

------------------------------------------------------------------------

## Criando API com Spring Boot

### Criar projeto em:

https://start.spring.io

Dependência: - Spring Web

## Controller

``` java
@RestController
@RequestMapping("/hello")
public class HelloController {

    @GetMapping
    public Map<String, String> hello() {
        return Map.of("message", "Hello World");
    }
}
```

### Executar

``` bash
mvn spring-boot:run
```

------------------------------------------------------------------------

# Comparação Final

  Java Puro                  Spring Boot
  -------------------------- --------------------
  Muito código boilerplate   Anotações resolvem
  Gerenciamento manual       Container gerencia
  Complexidade maior         Produtividade alta
  Difícil escalar            Arquitetura pronta

------------------------------------------------------------------------

# Discussão Conceitual Final

Refletir com a turma:

-   O que o framework realmente fez?
-   Ele tirou controle ou organizou o controle?
-   Quando NÃO usar framework?
-   Framework é obrigatório?

------------------------------------------------------------------------

# Atividade Prática em Sala

Dividir a turma em grupos.

Criar rota `/status` que retorne:

``` json
{
  "status": "ok",
  "framework": "nome_do_framework"
}
```

Cada grupo escolhe:

-   Node puro
-   Express
-   Java puro
-   Spring Boot

Apresentar resultado para turma.

------------------------------------------------------------------------

# Tarefa para Casa

1.  Criar rota `/time` que retorne data e hora atual.
2.  Criar rota `/user/{name}` que retorne:

``` json
{ "user": "nome" }
```

3.  Responder:

-   Qual abordagem foi mais simples?
-   Qual escalaria melhor?
-   Onde o framework agregou mais valor?

------------------------------------------------------------------------

# Resultado Pedagógico Esperado

-   Compreensão prática da diferença entre biblioteca e framework
-   Entendimento do ganho de produtividade
-   Primeira experiência real com abstração de infraestrutura
-   Base concreta para próximas aulas