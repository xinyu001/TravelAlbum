package com.xinyu.travelablum.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.SimpleDateFormat;
import java.util.Date;


@RestController
public class HelloWorldController {

    @RequestMapping("/HelloWord")
    public String HelloWorld(){
        Date date = new Date();

        SimpleDateFormat df=new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        //格式化输出
        System.out.println(df.format(date));

        System.out.println("连接成功");
        return df.format(date)+ "  Hello World!";



    }
}