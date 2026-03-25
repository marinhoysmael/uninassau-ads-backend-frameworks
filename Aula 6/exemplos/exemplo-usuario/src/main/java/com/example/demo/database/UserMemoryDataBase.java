package com.example.demo.database;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

import com.example.demo.models.User;

@Component
public class UserMemoryDataBase {
    private Map<Integer, User> users;

    public UserMemoryDataBase() {
        this.users = new HashMap<>();

        users.put(1, new User(1, "John Doe", "john.doe@example.com", LocalDateTime.now()));
    }

    public Map<Integer, User> getAll() {
        return users;
    }

    public void save(Integer id, User user) {
        users.put(id, user);
    }

    public void remove(Integer id) {
        users.remove(id);
    }

    public User getById(Integer id) {
        return users.get(id);
    }

    public Integer getSize() {
        return users.size();
    }

}
