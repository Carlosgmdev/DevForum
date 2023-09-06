package com.carlosg.devforum.domain.users;

public record UserSignUp(
        String username,
        String email,
        String password
) {
}
