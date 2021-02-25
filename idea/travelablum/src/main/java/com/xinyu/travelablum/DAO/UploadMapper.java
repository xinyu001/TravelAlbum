package com.xinyu.travelablum.DAO;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;


@Mapper
public interface UploadMapper {


    @Insert("insert into image(albumid,imagename,path) values(#{albumid},#{imagename},#{path})")
    int newimage(@Param("albumid") String albumid,@Param("imagename") String imagename,@Param("path") String path);

    @Insert("insert into album(albumname,userid) values(#{albumname},#{userid})")
    int newalbum(@Param("albumname") String albumname,@Param("userid") String userid);

}

