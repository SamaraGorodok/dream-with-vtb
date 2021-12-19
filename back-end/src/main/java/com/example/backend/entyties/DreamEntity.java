package com.example.backend.entyties;

import javax.persistence.*;
import java.util.Objects;

@Entity(name = "dreams")
public class DreamEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long dreamId;
    private Integer moneyToDream = null;
    private String description = null;
    private String dreamName = null;
    private int userId;
    private int priorityLevel;
    private int amountOfMoneyToSaveEachMonth;


    public DreamEntity() {
    }

    public DreamEntity(Long dreamId, Integer moneyToDream, String description, String dreamName, int userId, int priorityLevel, int amountOfMoneyToSaveEachMonth) {
        this.dreamId = dreamId;
        this.moneyToDream = moneyToDream;
        this.description = description;
        this.dreamName = dreamName;
        this.userId = userId;
        this.priorityLevel = priorityLevel;
        this.amountOfMoneyToSaveEachMonth = amountOfMoneyToSaveEachMonth;
    }

    public DreamEntity(Integer moneyToDream, String description, String dreamName, int userId, int priorityLevel, int amountOfMoneyToSaveEachMonth) {
        this.moneyToDream = moneyToDream;
        this.description = description;
        this.dreamName = dreamName;
        this.userId = userId;
        this.priorityLevel = priorityLevel;
        this.amountOfMoneyToSaveEachMonth = amountOfMoneyToSaveEachMonth;
    }

    public Integer getMoneyToDream() {
        return moneyToDream;
    }

    public void setMoneyToDream(Integer moneyToDream) {
        this.moneyToDream = moneyToDream;
    }

    @Override
    public String toString() {
        return "DreamEntity{" +
                "dreamId=" + dreamId +
                ", moneyToDream=" + moneyToDream +
                ", description='" + description + '\'' +
                ", dreamName='" + dreamName + '\'' +
                ", userId=" + userId +
                ", priorityLevel=" + priorityLevel +
                ", amountOfMoneyToSaveEachMonth=" + amountOfMoneyToSaveEachMonth +
                '}';
    }

    public Long getDreamId() {
        return dreamId;
    }

    public void setDreamId(Long dreamId) {
        this.dreamId = dreamId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getPriorityLevel() {
        return priorityLevel;
    }

    public void setPriorityLevel(int priorityLevel) {
        this.priorityLevel = priorityLevel;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDreamName() {
        return dreamName;
    }

    public void setDreamName(String nameDream) {
        this.dreamName = nameDream;
    }

    public int getAmountOfMoneyToSaveEachMonth() {
        return amountOfMoneyToSaveEachMonth;
    }

    public void setAmountOfMoneyToSaveEachMonth(int amountOfMoneyToSaveEachMonth) {
        this.amountOfMoneyToSaveEachMonth = amountOfMoneyToSaveEachMonth;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof DreamEntity)) return false;
        DreamEntity that = (DreamEntity) o;
        return userId == that.userId &&
                priorityLevel == that.priorityLevel &&
                amountOfMoneyToSaveEachMonth == that.amountOfMoneyToSaveEachMonth &&
                Objects.equals(dreamId, that.dreamId) &&
                Objects.equals(moneyToDream, that.moneyToDream) &&
                Objects.equals(description, that.description) &&
                Objects.equals(dreamName, that.dreamName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(dreamId, moneyToDream, description, dreamName, userId, priorityLevel, amountOfMoneyToSaveEachMonth);
    }
}
