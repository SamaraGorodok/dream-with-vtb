package com.example.backend.repositories;

import com.example.backend.entyties.DreamEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DreamEntityRepository extends JpaRepository<DreamEntity, Long> {

    List<DreamEntity> findAllByDreamId (long id);

    List<DreamEntity> findAllByMoneyToDream (int amount);

    List<DreamEntity> findAllByDescription (String description);

    List<DreamEntity> findAllByDreamName(String name);

    List<DreamEntity> findAllByUserId (int userId);

    List<DreamEntity> findAllByPriorityLevel (int priority);

    List<DreamEntity> findAllByMoneyToDreamGreaterThan (int amount);

    List<DreamEntity> findAllByMoneyToDreamLessThan (int amount);

}
