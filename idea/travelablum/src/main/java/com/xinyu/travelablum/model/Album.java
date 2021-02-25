package com.xinyu.travelablum.model;

import java.util.Date;

public class Album {
    private Integer albumid;
    private Integer userid;
    private String albumname;
    private Integer coverimageid;
    private Date creationdate;
    private String albumtype;
    private String coverimagepath;
    private String status;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getAlbumid() {
        return albumid;
    }

    public void setAlbumid(Integer albumid) {
        this.albumid = albumid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getAlbumname() {
        return albumname;
    }

    public void setAlbumname(String albumname) {
        this.albumname = albumname;
    }

    public Integer getCoverimageid() {
        return coverimageid;
    }

    public void setCoverimageid(Integer coverimageid) {
        this.coverimageid = coverimageid;
    }

    public Date getCreationdate() {
        return creationdate;
    }

    public void setCreationdate(Date creationdate) {
        this.creationdate = creationdate;
    }

    public String getAlbumtype() {
        return albumtype;
    }

    public void setAlbumtype(String albumtype) {
        this.albumtype = albumtype;
    }

    public String getCoverimagepath() {
        return coverimagepath;
    }

    public void setCoverimagepath(String coverimagepath) {
        this.coverimagepath = coverimagepath;
    }
}
