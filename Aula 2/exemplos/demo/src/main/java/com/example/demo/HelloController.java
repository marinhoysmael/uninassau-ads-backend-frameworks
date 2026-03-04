package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/hello")
public class HelloController {

    @GetMapping("/1")
    public String sayHello() {
        return "Hello, World!";
    }

    @GetMapping("/2")
    public String sayHello2() {
        return "Hello, World 2!";
    }
}
