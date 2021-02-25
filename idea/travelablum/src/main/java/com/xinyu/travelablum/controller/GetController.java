package com.xinyu.travelablum.controller;

import com.xinyu.travelablum.model.Album;
import com.xinyu.travelablum.model.Image;
import com.xinyu.travelablum.model.User;
import com.xinyu.travelablum.service.GetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/Get")
public class GetController {

    @Autowired
    private GetService getService;

    @GetMapping(value = "/OpenId")
    public String GetOpenId(@RequestParam(value = "code") String code) throws Exception {
        System.out.println("code:"+code);
        String appid="wx5d6a6caf7c8b5b67";
        String secret="c4758627a56e1fe7b8454e3c408ab606";
        String url = "https://api.weixin.qq.com/sns/jscode2session?appid={appid}&secret={secret}&js_code={code}&grant_type=authorization_code";
        RestTemplate restTemplate = new RestTemplate();
        Map<String,String> map = new HashMap<String,String>();
        map.put("appid",appid);
        map.put("secret",secret);
        map.put("code",code);
        String res = restTemplate.getForObject(url,String.class,map);
        System.out.println(res);
        return res;
    }

    @GetMapping(value = "/User")
    public User GetUser(@RequestParam(value = "openid") String openid) throws Exception {
        System.out.println("用户查询中");
        return getService.getuser(openid);
    }

    @GetMapping(value = "/Albums")//根据用户id查询该用户所拥有的相册
    public List<Album> GetAlbums(@RequestParam(value = "userid") String userid) throws Exception {
        System.out.println("用户相册查询中");
        return getService.getablums(userid);
    }

    @GetMapping(value = "/ShareAlbum")//查询共享相册
    public List<Album> GetShareAlbum() throws Exception {
        System.out.println("共享相册查询中");
        return getService.getshareablum();
    }


    @GetMapping(value = "/Album")//根据相册id查询相册信息
    public Album GetAlbum(@RequestParam(value = "albumid") String albumid) throws Exception {
        System.out.println("相册查询中");
        return getService.getablum(albumid);
    }

    @GetMapping(value = "/Images")
    public List<Image> GetImages(@RequestParam(value = "albumid") String albumid) throws Exception {
        System.out.println("相册图片查询中");
        return getService.getimages(albumid);
    }

    @GetMapping(value = "/Image")
    public Image GetImage(@RequestParam(value = "imageid") String imageid) throws Exception {
        System.out.println("图片查询中");
        return getService.getimage(imageid);
    }






}