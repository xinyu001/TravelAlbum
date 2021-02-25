package com.xinyu.travelablum.controller;

import com.xinyu.travelablum.service.GetService;
import com.xinyu.travelablum.service.UploadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;

import java.util.Map;

@RestController
@RequestMapping("/Upload")
public class UploadController {

    @Autowired
    private UploadService uploadService;

    @GetMapping(value = "/Image")
    public int UploadImage(@RequestParam(value = "albumid") String albumid,
                           @RequestParam(value = "imagename") String imagename,
                           @RequestParam(value = "path") String path,
                           @RequestParam(value = "ai") String ai) throws Exception {
        System.out.println("图片上传中");
        return uploadService.newimage(albumid,imagename,path,ai);
    }

    @GetMapping(value = "/Album")
    public int UploadAlbum(@RequestParam(value = "albumname") String albumname,
                           @RequestParam(value = "userid") String userid) throws Exception {
        System.out.println("相册新建中");
        return uploadService.newalbum(albumname,userid);
    }


    }





