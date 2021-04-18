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

    @GetMapping(value = "/Search")
    public List<Image> Search(@RequestParam(value = "label") String label,
                              @RequestParam(value = "ai") String ai,
                              @RequestParam(value = "location") String location,
                              @RequestParam(value = "userid") String userid) throws Exception {
        System.out.println("搜索中"+label+ai+location +userid);
        return getService.search(label,ai,location,userid);
    }

//    @GetMapping(value = "AIList")
//    public List<AI> GetAiList(@RequestParam(value = "userid") String userid)throws Exception{
//        System.out.println("查询ai中");
//        return getService.getailist(userid);
//
//    }

    @GetMapping(value = "/ImagesByLocation")
    public List<Image> GetImagesByLocation(@RequestParam(value = "userid") String userid,
                                           @RequestParam(value = "location") String location)throws Exception{
        System.out.println("查询该地点所有的图片中");
        return getService.getimagesbylocation(location,userid);
    }

    @GetMapping(value = "/ImagesByAI")
    public List<Image> GetImagesByAI(@RequestParam(value = "userid") String userid,
                                           @RequestParam(value = "ai") String ai)throws Exception{
        System.out.println("查询该AI所有图片中");
        return getService.getimagesbyai(ai,userid);
    }

    @GetMapping(value = "/ImagesByLabel")
    public List<Image> GetImagesByPeople(@RequestParam(value = "userid") String userid,
                                           @RequestParam(value = "label") String label)throws Exception{
        System.out.println("查询该人物所有图片中");
        return getService.getimagesbylabel(label,userid);
    }


//
//    @GetMapping(value = "/Locations")
//    public List<String> GetLocations(@RequestParam(value = "userid") String userid)throws Exception{
//        System.out.println("查询所有地点中");
//        return getService.getlocations(userid);
//    }

    @GetMapping(value = "/Locations")
    public List<Image> GetLocations(@RequestParam(value = "userid") String userid)throws Exception{
        System.out.println("查询所有地点中");
        return getService.getlocations(userid);
    }

    @GetMapping(value = "/AIs")
    public List<Image> GetAIs(@RequestParam(value = "userid") String userid)throws Exception{
        System.out.println("查询所有AI识别结果中");
        return getService.getais(userid);
    }

    @GetMapping(value = "/Labels")
    public List<Image> GetPeoples(@RequestParam(value = "userid") String userid)throws Exception{
        System.out.println("查询所有label中");
        return getService.getlabels(userid);
    }



}