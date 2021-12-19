package com.example.backend.controllers;

import com.example.backend.services.PaymentTermService;
import com.example.backend.services.UserService;
import com.squareup.okhttp.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pay")
public class PaymentTermController {

    @Autowired
    private PaymentTermService paymentTermService;

    //вместе запросом передаем :накопленную сумму, сумму которую нужно накопить, и сумму которую откладываем ежемесячно
    @GetMapping("/payment")
    public ResponseEntity<?> getPaymentTerm(@RequestParam Integer sum,@RequestParam Integer maxSum, @RequestParam Integer salary){
        String response = paymentTermService.getTerm(sum,maxSum,salary);
        return ResponseEntity.ok().body(response);
    }

}
