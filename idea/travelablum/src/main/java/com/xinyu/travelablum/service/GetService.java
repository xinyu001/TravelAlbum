package com.xinyu.travelablum.service;

import com.xinyu.travelablum.DAO.GetMapper;
import com.xinyu.travelablum.model.Album;
import com.xinyu.travelablum.model.Image;
import com.xinyu.travelablum.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GetService {
    @Autowired
    private GetMapper getMapper;  //这里会有报错，不用管

//    public String getopenid(String code) {
//        System.out.println("code:"+code);
//        return "openid"+code;
//    }



    public User getuser(String openid) {
        return getMapper.getuser(openid);
    }

    public List<Album> getablums(String userid) {
        return getMapper.getalbums(userid);
    }

    public Album getablum(String albumid) {
        return getMapper.getalbum(albumid);
    }

    public List<Album>  getshareablum() {
        return getMapper.getsharealbum();
    }

    public List<Image> getimages(String albumid) {
        return getMapper.getimages(albumid);
    }
    public Image getimage(String imageid) {
        return getMapper.getimage(imageid);
    }
}
