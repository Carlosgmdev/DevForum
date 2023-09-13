package com.carlosg.devforum.service;

import com.carlosg.devforum.domain.users.User;
import com.carlosg.devforum.domain.users.UserDto;
import com.carlosg.devforum.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username);
    }



    public UserDto signup(User user) {
        String hashedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(hashedPassword);
        var newUser = userRepository.save(user);
        return new UserDto(newUser);
    }

    public Boolean validateUsername(String username) {
        var foundUser = userRepository.findByUsername(username);
        if(foundUser != null) {
            return true;
        } else {
            return false;
        }
    }

    public Boolean validateEmail(String email) {
        var foundUser = userRepository.findByEmail(email);
        System.out.println(foundUser);
        if(foundUser != null) {
            return true;
        } else {
            return false;
        }
    }
}
