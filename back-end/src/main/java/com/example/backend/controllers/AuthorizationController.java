package com.example.backend.controllers;


import com.example.backend.services.UserService;
import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/auth")
public class AuthorizationController {

    @Autowired
    private UserService userService;

    @PostMapping("/tokenApi")
    public String getTokenApi() throws IOException, InterruptedException {
        return userService.getVTBTokens();
    }


    @GetMapping("/login")
    public ResponseEntity<?> login(@RequestParam String numberCard) throws IOException, InterruptedException {
        String token = getTokenApi();
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url("https://hackaton.bankingapi.ru/api/vtbid/v1/oauth2/authorize?scope=kiludtihh&redirect_uri=http://fuzupro.ca/guzal&state=ID&client_id="+numberCard+"&response_type=code")
                .get()
                .addHeader("Authorization", "Bearer "+token)
                .addHeader("accept", "application/json")
                .build();
        Response response = client.newCall(request).execute();
        Integer code =(int)( Math.random() * (1000000-100000) ) + 100000;
        System.out.println(response.code());
        return ResponseEntity.accepted().body(code);
    }

    @GetMapping("/me")
    public ResponseEntity<?> me() throws IOException, InterruptedException {
        String token = getTokenApi();
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url("https://hackaton.bankingapi.ru/api/vtbid/v1/oauth2/me?scopes=idemik")
                .get()
                .addHeader("Authorization", "Bearer "+token)
                .addHeader("Content-Type", "application/json")
                .build();
        Response response = client.newCall(request).execute();
        System.out.println(response.toString());
        return ResponseEntity.ok().body(response.body().string());
    }
    @GetMapping("/logout")
    public ResponseEntity<?> logout() throws IOException, InterruptedException {
        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url("https://hackaton.bankingapi.ru/api/vtbid/v1/oidc/logout")
                .get()
                .addHeader("Authorization", "Bearer "+getTokenApi())
                .addHeader("accept", "application/json")
                .build();

        Response response = client.newCall(request).execute();
    return ResponseEntity.ok().body(response);
    }

}
