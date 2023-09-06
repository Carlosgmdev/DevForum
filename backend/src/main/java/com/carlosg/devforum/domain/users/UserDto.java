package com.carlosg.devforum.domain.users;

public record UserDto(
        Long id,
        String username
) {
    public UserDto(User user) {
        this(
                user.getId(),
                user.getUsername()
        );
    }
}
