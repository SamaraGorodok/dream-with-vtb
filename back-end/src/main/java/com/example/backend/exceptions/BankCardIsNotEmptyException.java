package com.example.backend.exceptions;

public class BankCardIsNotEmptyException extends Exception {
    public BankCardIsNotEmptyException() {
        super("Банковская должна быть пустой!");
    }
}
