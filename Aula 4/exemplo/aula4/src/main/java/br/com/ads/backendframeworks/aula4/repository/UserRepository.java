package br.com.ads.backendframeworks.aula4.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.ads.backendframeworks.aula4.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    
}
