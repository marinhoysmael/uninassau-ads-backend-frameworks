package com.example.demo.controllers;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.User;
import com.example.demo.services.UsersService;

@RestController
@RequestMapping("users")
public class UsersController {

    private final UsersService usersService;
    
    public UsersController(UsersService usersService) {
        this.usersService = usersService;
    }

    @GetMapping()
    public List<User> getUsers() {

        return usersService.getUsers();
        
    }

    @PostMapping()
    public ResponseEntity<Object>  createUser(@RequestBody User user) {
        try {
            User createdUser = usersService.create(user);
            return ResponseEntity.status(200).body(createdUser);
        } catch (RuntimeException e) {
            return ResponseEntity.status(409).body(e.getMessage());
        }
    }
}
