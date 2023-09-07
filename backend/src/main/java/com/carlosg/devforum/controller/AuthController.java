package com.carlosg.devforum.controller;

import com.carlosg.devforum.domain.users.User;
import com.carlosg.devforum.domain.users.UserAuthDto;
import com.carlosg.devforum.domain.users.UserLogin;
import com.carlosg.devforum.infra.security.JWTDto;
import com.carlosg.devforum.infra.security.TokenService;
import com.carlosg.devforum.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
@Validated
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private AuthService authService;


    @PostMapping("/login")
    public ResponseEntity<UserAuthDto> authenticate(@RequestBody @Valid UserLogin userLogin) {
        Authentication authToken = new UsernamePasswordAuthenticationToken(userLogin.username(), userLogin.password());
        var authUser = authenticationManager.authenticate(authToken);
        var JWTToken = tokenService.generateToken((User) authUser.getPrincipal());
        return ResponseEntity.ok(new UserAuthDto(
                (User) authUser.getPrincipal(),
                JWTToken
        ));
    }

    @PostMapping("/signup")
    public ResponseEntity signup(@RequestBody @Valid User user) {
        return ResponseEntity.ok(
                authService.signup(user)
        );
    }
}
