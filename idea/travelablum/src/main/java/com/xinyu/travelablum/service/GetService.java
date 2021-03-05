package com.xinyu.travelablum.service;

import com.xinyu.travelablum.DAO.GetMapper;
import com.xinyu.travelablum.model.AI;
import com.xinyu.travelablum.model.Album;
import com.xinyu.travelablum.model.Image;
import com.xinyu.travelablum.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class GetService {
    @Autowired
    private GetMapper getMapper;  //这里会有报错，不用管



    public User getuser(String openid) {
       User user=getMapper.getuser(openid);
       if(user==null){
           getMapper.newuser(openid);
       }
        return getMapper.getuser(openid);
    }

    public List<Album> getablums(String userid) { return getMapper.getalbums(userid); }

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

    public List<Image> search(String label,String ai,String location,String userid) {
        return getMapper.search(label,ai,location,userid);
    }

    public List<Image> getlocations(String userid){


        List<String> list=getMapper.getlocations(userid);
        List<Image> imagelist=new ArrayList<Image>();
     //   System.out.println(list);
//        for (int i=0;i<list.length;i++){
//
//        }
        for(String attribute : list) {
    //        System.out.println(attribute);
            imagelist.add(getMapper.getimagebylocation(attribute,userid));

        }

            return imagelist;
//        return getMapper.getimagesbylocation("广州",userid);


    }

    public Image getimagebylocation(String location,String userid){
        return getMapper.getimagebylocation(location,userid);
    }
    public List<Image> getimagesbylocation(String location,String userid){
     //   System.out.println(location+userid);
        return getMapper.getimagesbylocation(location,userid);
    }

//    public List<AI> getailist(String userid) {
//
//        return e;
//    }
}
