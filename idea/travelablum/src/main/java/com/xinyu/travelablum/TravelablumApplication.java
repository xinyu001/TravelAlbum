package com.xinyu.travelablum;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.xinyu.travelablum.DAO;")
public class TravelablumApplication {

    public static void main(String[] args) {
        SpringApplication.run(TravelablumApplication.class, args);
    }

}
