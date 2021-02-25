package com.xinyu.travelablum.DAO;

import com.xinyu.travelablum.model.User;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import org.apache.ibatis.annotations.Update;

@Mapper
public interface SetMapper {

    @Update("UPDATE image SET status='delete' WHERE imageid=#{imageid}")
    int deleteimage(@Param("imageid") String imageid);

    @Update("UPDATE album SET status='delete' WHERE albumid=#{albumid}")
    int deletealbum(@Param("albumid") String albumid);


    //    @Insert("insert into album(albumname,userid) values(#{albumname},#{userid})")
//    int newalbum(@Param("albumname") String albumname,@Param("userid") String userid);
}