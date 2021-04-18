package com.xinyu.travelablum.service;


import com.xinyu.travelablum.DAO.UploadMapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UploadService {
    @Autowired
    private UploadMapper uploadMapper;



    public int newimage(String albumid, String imagename, String path,String ai) {
        return uploadMapper.newimage(albumid,imagename,path,ai);
    }
    public int newalbum(String albumname,String userid,String albumtype) {
        return uploadMapper.newalbum(albumname,userid,albumtype);
    }

}
