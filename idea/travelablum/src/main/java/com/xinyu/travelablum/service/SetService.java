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

}
