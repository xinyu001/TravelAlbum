package com.xinyu.travelablum.controller;

import com.xinyu.travelablum.service.SetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Set")
public class SetController {
    @Autowired
    private SetService setService;

    @GetMapping(value = "/DeleteImage")
    public  int DeleteImage(@RequestParam(value = "imageid") String imageid) throws Exception {
    System.out.println("删除图片");
    return setService.deleteimage(imageid);
    }

    @GetMapping(value = "/DeleteAlbum")
    public  int DeleteAlbum(@RequestParam(value = "albumid") String albumid) throws Exception {
        System.out.println("删除相册");
        return setService.deletealbum(albumid);
    }

}
