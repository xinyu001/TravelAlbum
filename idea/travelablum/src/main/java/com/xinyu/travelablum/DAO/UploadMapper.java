package com.xinyu.travelablum.DAO;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;


@Mapper
public interface UploadMapper {


    @Insert("insert into image(albumid,imagename,path,ai) values(#{albumid},#{imagename},#{path},#{ai})")
    int newimage(@Param("albumid") String albumid,@Param("imagename") String imagename,
                 @Param("path") String patt,@Param("ai") String ai);

    @Insert("insert into album(albumname,userid,albumtype) values(#{albumname},#{userid},#{albumtype})")
    int newalbum(@Param("albumname") String albumname,
                 @Param("userid")String userid,
                 @Param("albumtype") String albumtype);

}

