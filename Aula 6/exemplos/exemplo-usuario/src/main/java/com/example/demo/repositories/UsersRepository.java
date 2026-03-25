package com.example.demo.repositories;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.database.UserMemoryDataBase;
import com.example.demo.models.User;

@Component
public class UsersRepository {
    
    private UserMemoryDataBase userMemoryDataBase;

    public UsersRepository(UserMemoryDataBase userMemoryDataBase) {
        this.userMemoryDataBase = userMemoryDataBase;
    }

    public List<User> getAll() {
        return userMemoryDataBase.getAll().values().stream().toList();
    }

    public void save(Integer id, User user) {
        userMemoryDataBase.save(id, user);
    }

    public User save(User user) {
        Integer lastId = this.getSize();
        
        lastId++;

        User persistenceUser = new User(lastId, user.getName(), user.getEmail(), LocalDateTime.now());

        this.save(persistenceUser.getId(), persistenceUser);
        
        return persistenceUser;
    }

    public void remove(Integer id) {
        userMemoryDataBase.remove(id);
    }

    public User getById(Integer id) {
        return userMemoryDataBase.getById(id);
    }

    public User getByEmail(String email){
        return userMemoryDataBase.getAll().values().stream()
            .filter(user -> user.getEmail().equals(email))
            .findFirst()
            .orElse(null);
    }

    public Integer getSize() {
        return userMemoryDataBase.getSize();
    }
}
