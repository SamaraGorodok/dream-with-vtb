package com.example.backend.services;

import com.example.backend.pojo.responses.AuthVTBTokensRsp;
import com.squareup.okhttp.*;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

@Service
public class UserService {
    public String getVTBTokens() throws IOException {
        URL url = new URL("https://hackaton.bankingapi.ru/passport/oauth2/token");
        HttpURLConnection http = (HttpURLConnection) url.openConnection();
        http.setRequestMethod("POST");
        http.setDoOutput(true);
        http.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");

        String data = "grant_type=client_credentials&client_id=team11@app.hackaton.bankingapi.ru&client_secret=cZtKk6eY";

        byte[] out = data.getBytes(StandardCharsets.UTF_8);
        BufferedReader br = null;
        OutputStream stream = http.getOutputStream();
        stream.write(out);
        br = new BufferedReader(new InputStreamReader(http.getInputStream()));
        String strCurrentLine = null, str;
        while ((str = br.readLine()) != null) {
            strCurrentLine += str;
        }
        String tokenApi = null;
        tokenApi=strCurrentLine.substring(strCurrentLine.indexOf(":")+2,strCurrentLine.length()-1);
        tokenApi=tokenApi.substring(0,tokenApi.indexOf("\""));
        System.out.println(tokenApi);
        http.disconnect();
        return tokenApi;

    }
}
