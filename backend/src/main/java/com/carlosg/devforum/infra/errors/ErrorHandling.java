package com.carlosg.devforum.infra.errors;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ErrorHandling {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity notFound() {
        return ResponseEntity.notFound().build();
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity badRequest(MethodArgumentNotValidException ex) {
        var errors = ex.getFieldErrors().stream().map(BadRequestDto::new).toList();
        return ResponseEntity.badRequest().body(errors);
    }

    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity duplicated(DataIntegrityViolationException ex) {
        return ResponseEntity.badRequest().body(new BadRequestDto("data", "duplicated data"));
    }

    public record BadRequestDto(String field, String error) {
        public BadRequestDto(FieldError error) {
            this(error.getField(), error.getDefaultMessage());
        }
    }
}

