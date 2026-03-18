package br.com.ads.backendframeworks.aula4.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import br.com.ads.backendframeworks.aula4.service.UserService;
import br.com.ads.backendframeworks.aula4.model.User;

@Controller
@RequestMapping("/users")
public class UserController {

    public UserController(UserService userService) {
        this.userService = userService;
    }

    private UserService userService;
    // /users/list
    
    @GetMapping("/list")
    public List<User> listUsers(){

        return userService.listUsers();
    }

    public User getUserById(Long id){
        return userService.getUserById(id);
    }

    public void createUser(User user){
        userService.createUser(user);
    }
}
