package com.carlosg.devhotel.domain.users;

public record UserDto(
        Long id,
        String username,
        String email
) {
    public UserDto(User user) {
        this(
                user.getId(),
                user.getUsername(),
                user.getEmail()
        );
    }
}
