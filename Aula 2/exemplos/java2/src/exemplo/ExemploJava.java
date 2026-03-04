package java2.src.exemplo;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

import com.sun.net.httpserver.HttpServer;

public class ExemploJava {
    public static void main(String[] args) throws IOException {

        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);
        
        server.createContext("/hello", exchange -> {
            
            String response = "{\"message\":\"Hello, World!\"}";
                exchange.getResponseHeaders()
                    .set("Content-Type","application/json");
                exchange.sendResponseHeaders(200, response.length());
            OutputStream os = exchange.getResponseBody();
            System.out.println(response.getBytes());
            os.write(response.getBytes());
            os.close();
         });

         server.createContext("/hello2", exchange -> {
        
            String response = "{\"message\":\"Hello, World!2\"}";
                exchange.getResponseHeaders()
                    .set("Content-Type","application/json");
                exchange.sendResponseHeaders(200, response.length());
            OutputStream os = exchange.getResponseBody();
            os.write(response.getBytes());
            os.close();
         });

        server.start();
        
        System.out.println("Servidor em http://localhost:8080");

    }
}
