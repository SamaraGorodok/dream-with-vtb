package com.example.backend.entyties;

import javax.persistence.*;

@Entity(name = "bankCards")
public class BankCardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    Long cardId;
    String PAN; //"489350******8081" - Маскированый PAN
    String embossingName; //"ИМЯ ФАМИЛИЯ"
    String cardExpiry; //"MM/yy" - Дата окончания действия карты
    String publicId; //"2991748655611904" - Публичный идентификатор продукта\
    Long userId;
    Long balance;
    String phoneNumber;

    public BankCardEntity() {
    }

    public BankCardEntity(Long cardId, String PAN, String embossingName, String cardExpiry, String publicId, Long userId, Long balance, String phoneNumber) {
        this.cardId = cardId;
        this.PAN = PAN;
        this.embossingName = embossingName;
        this.cardExpiry = cardExpiry;
        this.publicId = publicId;
        this.userId = userId;
        this.balance = balance;
        this.phoneNumber = phoneNumber;
    }

    public BankCardEntity(String PAN, String embossingName, String cardExpiry, String publicId, Long userId, Long balance, String phoneNumber) {
        this.PAN = PAN;
        this.embossingName = embossingName;
        this.cardExpiry = cardExpiry;
        this.publicId = publicId;
        this.userId = userId;
        this.balance = balance;
        this.phoneNumber = phoneNumber;
    }

    public String getPAN() {
        return PAN;
    }

    public void setPAN(String PAN) {
        this.PAN = PAN;
    }

    public String getEmbossingName() {
        return embossingName;
    }

    public void setEmbossingName(String embossingName) {
        this.embossingName = embossingName;
    }

    public String getCardExpiry() {
        return cardExpiry;
    }

    public void setCardExpiry(String cardExpiry) {
        this.cardExpiry = cardExpiry;
    }

    public String getPublicId() {
        return publicId;
    }

    public void setPublicId(String publicId) {
        this.publicId = publicId;
    }

    public Long getCardId() {
        return cardId;
    }

    public void setCardId(Long cardId) {
        this.cardId = cardId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getBalance() {
        return balance;
    }

    public void setBalance(Long balance) {
        this.balance = balance;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
