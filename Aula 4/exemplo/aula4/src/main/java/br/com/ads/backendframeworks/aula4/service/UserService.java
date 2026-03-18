package br.com.ads.backendframeworks.aula4.service;

import java.util.List;

import org.springframework.stereotype.Service;

import br.com.ads.backendframeworks.aula4.model.User;
import br.com.ads.backendframeworks.aula4.repository.UserRepository;

@Service
public class UserService {
    
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> listUsers(){

        return userRepository.findAll();
    }

    public User getUserById(Long id){
        return userRepository.findById(id).orElse(null);
    }

    public void createUser(User user){
        userRepository.save(user);
    }
}
