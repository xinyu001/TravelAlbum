package com.xinyu.travelablum.service;


import com.xinyu.travelablum.DAO.UploadMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UploadService {
    @Autowired
    private UploadMapper uploadMapper;



    public int newimage(String albumid,String imagename,String path) {
        return uploadMapper.newimage(albumid,imagename,path);
    }
    public int newalbum(String albumname,String userid) {
        return uploadMapper.newalbum(albumname,userid);
    }

}
