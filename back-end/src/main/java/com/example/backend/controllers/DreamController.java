package com.example.backend.controllers;

import com.example.backend.entyties.DreamEntity;
import com.example.backend.services.DreamService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.*;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/dreams")
public class DreamController {
    @Autowired
    private DreamService dreamService;


    @PostMapping()
    public String saveDream(@RequestBody DreamEntity dreamEntity) throws ExecutionException, InterruptedException {
        dreamService.saveDream(dreamEntity);
        return "dream was successfully created";
    }

    @PutMapping("{id}")
    public String updateDream(@PathVariable("id") long id, @RequestBody DreamEntity dreamEntity) {
        return dreamService.updateDream(id, dreamEntity);
    }

    @PostMapping("/dreams")
    public ResponseEntity<?> getDreams() throws SQLException, ClassNotFoundException {
        Class.forName("com.mysql.jdbc.Driver");
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost/task4DB?"
                + "user=root&password=123");
        PreparedStatement st = con.prepareStatement("select * from dreams");
        ResultSet r1 = st.executeQuery();
        String jsonBody = "";
        if (r1.next()) {
            jsonBody += "{" + "moneyToDream: " + r1.getString("moneyToDream") + "\n" +
                    "description: " + r1.getString("description") + "\n" +
                    "dreamName: " + r1.getString("dreamName") + "\n" +
                    "moneyToDream: " + r1.getString("moneyToDream") + "\n" +
                    "userId: "+r1.getString("userId")+"\n"+
                    "priorityLevel: "+r1.getString("priorityLevel")+"\n"+
                    "amountOfMoneyToSaveEachMonth: "+r1.getString("amountOfMoneyToSaveEachMonth")+"\n"+
                    "}\n";
        }
        return ResponseEntity.ok().body(jsonBody);
    }
}
