package com.example.backend.repositories;

import com.example.backend.entyties.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserEntityRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByUserId (long userId);

    UserEntity findByCardId (String cardId);
}
