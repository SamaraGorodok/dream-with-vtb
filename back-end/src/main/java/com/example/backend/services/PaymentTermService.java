package com.example.backend.services;

import org.springframework.stereotype.Service;

@Service
public class PaymentTermService {
    //Метод для расчета того, сколько осталось накопить на мечту
    public String getTerm(int sum, int maxSum, int salary) {
        int term = (int) (maxSum - sum) / salary;
        String date = "";
        if (term > 12) {
            if (term / 12 == 1) {
                date = Integer.toString(term / 12) + " год ";
                term = term - (term / 12) * 12;
            }
            if (term / 12 >= 2 && term / 12 <= 4) {
                date = Integer.toString(term / 12) + " года ";
                term = term - (term / 12) * 12;
            }
            if (term / 12 >= 5 && term / 12 <= 20) {
                date = Integer.toString(term / 12) + " лет ";
                term = term - (term / 12) * 12;
            }
        }
        if (term <= 12) {
            if (term == 1) {
                date += Integer.toString(term) + " месяц";
            }
            if (term >= 2 && term <= 4) {
                date += Integer.toString(term) + " месяца";
            }
            if (term <= 12 && term >= 5) {
                date += Integer.toString(term) + " месяцев";
            }
        }

        return date;
    }
}
