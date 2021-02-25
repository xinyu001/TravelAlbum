package com.xinyu.travelablum.DAO;

import com.xinyu.travelablum.model.*;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.util.List;

@Mapper
public interface GetMapper {

        @Select("select * from user where openid=#{openid}")
        User getuser(@Param("openid") String openid);

        @Select("select * from album where userid=#{userid} and status='normal'")
        List<Album> getalbums(@Param("userid") String userid);

        @Select("select * from album where albumid=#{albumid}")
        Album getalbum(@Param("albumid") String albumid);

        @Select("select * from album where albumtype='share' and status='normal'")
        List<Album> getsharealbum();

        @Select("select * from image where albumid=#{albumid} and status='normal'")
        List<Image> getimages(@Param("albumid") String albumid);

        @Select("select * from image where imageid=#{imageid}")
        Image getimage(@Param("imageid") String imageid);

        @Select("select * from image where label=#{label} and albumid in(SELECT albumid from user where userid=#{userid} and status='normal')and status='normal' UNION " +
                "select * from image where ai=#{ai} and albumid in(SELECT albumid from user where userid=#{userid} and status='normal')and status='normal' UNION " +
                "select * from image where location=#{location} and albumid in(SELECT albumid from user where userid=#{userid} and status='normal')and status='normal'")
        List<Image> search(@Param("label") String label,@Param("ai") String ai,@Param("location") String location,@Param("userid") String userid);

        @Insert("insert into user(openid) value(#{openid})")
        int newuser(@Param(value ="openid") String openid);


//        @Select("select * from image where label=#{label} and albumid in(SELECT albumid from user where userid=#{userid} and status='normal') and status='normal'" )
//        @Select("select * from image where label=#{label} and status='normal'" )
//
//        List<Image> search(@Param("label") String label,@Param("ai") String ai,@Param("location") String location,@Param("userid") String userid);


//        @Insert("insert into image(albumid,imagename,path) values(#{albumid},#{imagename},#{path})")
//        int insert(@Param("name") String name,@Param("imagename") String imagename,@Param("path") String path);
//        values (#{id,jdbcType=INTEGER}, #{name,jdbcType=VARCHAR}
//               )
//        //
//        @Select("select id,name from test")
//        List<TestModel> select();
//
//        @Insert("insert into test(name) values(#{name})")
//        int insert(@Param("name") String name);

}

