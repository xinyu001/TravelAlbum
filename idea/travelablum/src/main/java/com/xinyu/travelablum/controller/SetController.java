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

    @GetMapping(value = "/UpdateUser")
    public int UpdateUser(@RequestParam(value ="name") String name,
                          @RequestParam(value="phonenumber") String phonenumber,
                          @RequestParam(value = "userid") String userid
                          ) throws  Exception{
        System.out.println("更新用户信息");
        return setService.updateuser(name,phonenumber,userid);
    }

    @GetMapping(value = "/UpdateImage")
    public int UpdateImage(@RequestParam(value = "imageid") String imageid,
                           @RequestParam(value = "label") String label,
                           @RequestParam(value = "location") String location,
                           @RequestParam(value = "ai") String ai)throws Exception{
        System.out.println("更新照片信息");
        return setService.updateimage(imageid,label,ai,location);
    }

    @GetMapping(value = "/UpdateAlbum")
    public int UpdateAlbum(
            @RequestParam(value = "albumtype") String albumtype,
            @RequestParam(value = "description") String description,
            @RequestParam(value = "albumid") String albumid
    )throws Exception{
        System.out.println("更新相册信息");
        return setService.updatealbum(albumtype,description,albumid);
    }

    @GetMapping(value = "/CoverImage")
    public int CoverImage(@RequestParam(value = "albumid") String albumid,
                          @RequestParam(value = "coverimagepath" )String coverimagepath
    )throws Exception{
        System.out.println("设置封面");
        return setService.coverimage(albumid,coverimagepath);
    }



}
