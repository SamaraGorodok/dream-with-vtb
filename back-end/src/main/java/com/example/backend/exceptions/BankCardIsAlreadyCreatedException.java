package com.example.backend.exceptions;

public class BankCardIsAlreadyCreatedException extends Exception{
    public BankCardIsAlreadyCreatedException() {
        super("Банковская карта уже существует!");
    }
}
