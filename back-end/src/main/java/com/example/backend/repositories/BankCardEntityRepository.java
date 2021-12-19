package com.example.backend.repositories;



import com.example.backend.entyties.BankCardEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface BankCardEntityRepository extends JpaRepository<BankCardEntity, Long> {

    BankCardEntity findByCardId (long cardId);

    BankCardEntity findAllByPAN (String PAN);

    BankCardEntity findByEmbossingName (String EmbossingName);

    List<BankCardEntity> findAllByCardExpiry (String CardExpiry);

    List<BankCardEntity> findAllByPublicId (String publicId);

    List<BankCardEntity> findAllByUserId (Long userId);

    @Modifying
    @Query(value = "UPDATE bank_cards b SET b.balance = b.balance - :amount WHERE b.bandCards.cardId = :id", nativeQuery = true)
    void decreaseMoneyById(@Param("amount") Long amount, @Param("id") Long id);

    @Modifying
    @Query(value = "UPDATE bank_cards b SET b.balance = b.balance + :amount WHERE b.bandCards.cardId = :id", nativeQuery = true)
    void increaseMoneyById(@Param("amount") Long amount, @Param("id") Long id);

}
