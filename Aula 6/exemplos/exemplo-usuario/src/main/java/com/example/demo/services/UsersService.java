package com.example.demo.services;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.models.User;
import com.example.demo.repositories.UsersRepository;

@Service
public class UsersService {
    
    private final UsersRepository usersRepository;

    public UsersService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public List<User> getUsers(){
        return usersRepository.getAll();
    }

    public User create(User user) throws RuntimeException {

        User usuarioEncontrado = usersRepository.getByEmail(user.getEmail());

        if(usuarioEncontrado != null) {
            throw new RuntimeException("Email já cadastrado");
        }
        
        return usersRepository.save(user);
    }
}
