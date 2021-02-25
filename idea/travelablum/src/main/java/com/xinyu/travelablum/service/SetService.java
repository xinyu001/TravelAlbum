package com.xinyu.travelablum.service;


import com.xinyu.travelablum.DAO.SetMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SetService {
    @Autowired
    private SetMapper setmapper;


    public int deleteimage(String imageid){
        return setmapper.deleteimage(imageid);
    }

    public int deletealbum(String albumid){
        return  setmapper.deletealbum(albumid);
    }

    public int updatealbum(String albumtype,String description,String albumid){
        return setmapper.updatealbum(albumtype,description,albumid);
    }
    public int updateimage(String imageid,String label,String ai,String location){
        return setmapper.updateimage(imageid,label,ai,location);
    }
    public int updateuser(String name,String phonenumber,String userid){
        return setmapper.updateuser(name,phonenumber,userid);
    }

    public int coverimage(String albumid, String coverimagepath) {
        return setmapper.coverimage(albumid,coverimagepath);
    }
}
