package com.vuchungbt.model;

import java.sql.Date;
import java.sql.Timestamp;

public class UserModel extends AbstractModel {
    private String avatar,pagePhoto,fbID,ggID,email,tel;
    private Timestamp lastOnline;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getPagePhoto() {
        return pagePhoto;
    }

    public void setPagePhoto(String pagePhoto) {
        this.pagePhoto = pagePhoto;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getFbID() {
        return fbID;
    }

    public void setFbID(String fbID) {
        this.fbID = fbID;
    }

    public String getGgID() {
        return ggID;
    }

    public void setGgID(String ggID) {
        this.ggID = ggID;
    }

    public Timestamp getLastOnline() {
        return lastOnline;
    }

    public void setLastOnline(Timestamp lastOnline) {
        this.lastOnline = lastOnline;
    }
}
