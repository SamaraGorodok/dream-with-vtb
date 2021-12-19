package com.example.backend.services;

import com.example.backend.entyties.BankCardEntity;
import com.example.backend.exceptions.BankCardIsAlreadyCreatedException;
import com.example.backend.exceptions.BankCardIsNotEmptyException;
import com.example.backend.pojo.requests.BankCardRq;
import com.example.backend.repositories.UserEntityRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.squareup.okhttp.MediaType;
import com.squareup.okhttp.OkHttpClient;
import com.squareup.okhttp.RequestBody;
import com.squareup.okhttp.Request;
import com.squareup.okhttp.Response;

import java.io.IOException;
import java.util.Optional;

@Service
public class ManageCardService {
    String resource = "http://hackaton.bankingapi.ru";
    private String xMdmId = "1565338466516992";
    private String xClientChannel = "doba";
    private String xPartnerId = "3849163347329024";
    // private String xGlobalTransactionID;

    @Autowired
    private UserEntityRepository userEntityRepository;

    public BankCardEntity createBankCard(BankCardRq bankCardRq) throws IOException, BankCardIsAlreadyCreatedException {
        if (userEntityRepository.getById(Long.parseLong(bankCardRq.getUserId())).getDreamsMoneyCard() == null) {
            OkHttpClient client = new OkHttpClient();

            MediaType mediaType = MediaType.parse("application/json");
            RequestBody body = RequestBody.create(mediaType, "{\"partnerId\":\"8568554873946112\"}");
            Request request = new Request.Builder()
                    .url(resource + "/api/rb/dks/cardemission/hackathon/v1/prepaid")
                    .post(body)
                    .addHeader("X-IBM-Client-Id", bankCardRq.getUserId())
                    .addHeader("X-Mdm-Id", xMdmId)
                    // .addHeader("X-Global-Transaction-ID", xGlobalTransactionID)
                    .addHeader("Authorization", bankCardRq.getAccessToken())
                    .addHeader("x-client-channel", xClientChannel)
                    .addHeader("X-PARTNER-ID", xPartnerId)
                    .addHeader("content-type", "application/json")
                    .addHeader("accept", "application/json")
                    .build();

            Response response = client.newCall(request).execute();

            ObjectMapper objectMapper = new ObjectMapper();
            BankCardEntity bankCardEntity = objectMapper.readValue(response.body().string(), BankCardEntity.class);

            return bankCardEntity;
        } else {
            throw new BankCardIsAlreadyCreatedException();
        }
    }

    public Response closeBankCard(BankCardRq bankCardRq) throws BankCardIsNotEmptyException, IOException {

            OkHttpClient client = new OkHttpClient();

            Request request = new Request.Builder()
                    .url("https://epa.api.vtb.ru/openapi/rb/dks/cardops/hackathon/v1/close/4634258280808448")
                    .post(null)
                    .addHeader("X-IBM-Client-Id", bankCardRq.getUserId())
                    .addHeader("X-Mdm-Id", xMdmId)
                    //.addHeader("X-Global-Transaction-ID", "REPLACE_THIS_VALUE")
                    .addHeader("Authorization", bankCardRq.getAccessToken())
                    .addHeader("x-client-channel", xClientChannel)
                    .addHeader("X-PARTNER-ID", xPartnerId)
                    .addHeader("accept", "application/json")
                    .build();

            Response response = client.newCall(request).execute();

            return response;


    }

}
