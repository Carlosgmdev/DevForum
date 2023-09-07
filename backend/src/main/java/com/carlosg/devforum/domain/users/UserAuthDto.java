package com.carlosg.devforum.domain.users;

public record UserAuthDto(
        Long id,
        String username,
        String email,
        String token
) {
    public UserAuthDto(User user, String token) {
        this(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                token
        );
    }
}
