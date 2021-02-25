package com.xinyu.travelablum.DAO;

import com.xinyu.travelablum.model.User;
import org.apache.ibatis.annotations.*;

@Mapper
public interface SetMapper {

    @Update("UPDATE image SET status='delete' WHERE imageid=#{imageid}")
    int deleteimage(@Param("imageid") String imageid);

    @Update("UPDATE album SET status='delete' WHERE albumid=#{albumid}")
    int deletealbum(@Param("albumid") String albumid);

    @Update("UPDATE image SET label=#{label},ai=#{ai},location=#{location} WHERE imageid=#{imageid}")
    int updateimage(@Param("imageid") String imageid,@Param("label") String label,@Param("ai") String ai,@Param("location") String location);

    @Update("UPDATE album SET albumtype=#{albumtype},description=#{description} WHERE albumid=#{albumid}")
    int updatealbum(@Param("albumtype") String albumtype,@Param("description") String description,@Param("albumid") String albumid);

    @Update("UPDATE user SET name=#{name},phonenumber=#{phonenumber} where userid=#{userid}")
    int updateuser(@Param("name") String name,@Param("phonenumber") String phonenumber,@Param("userid") String userid);

    @Update("UPDATE album SET coverimagepath=#{coverimagepath} WHERE albumid=#{albumid}")
    int coverimage(String albumid, String coverimagepath);


    //    @Insert("insert into album(albumname,userid) values(#{albumname},#{userid})")
//    int newalbum(@Param("albumname") String albumname,@Param("userid") String userid);
}