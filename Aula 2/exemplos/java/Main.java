import com.sun.net.httpserver.*;
import java.io.*;
import java.net.*;


public class Main {

    public static void main(String[] args) throws IOException {

        HttpServer server = HttpServer.create(new InetSocketAddress(8181), 0);
        
        server.createContext("/hello", exchange -> {
        
            String response = "{\"message\":\"Hello, World!\"}";
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