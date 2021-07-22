package com.codegym.service;

import com.codegym.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface IUserService extends UserDetailsService {
    Iterable<User> getAll();

    Optional<User> findById(Long id);

    User save(User user);

    void deleteById(Long id);

    User findByUsername(String userName);
}
