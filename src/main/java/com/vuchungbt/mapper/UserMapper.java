package com.vuchungbt.mapper;

import com.vuchungbt.model.UserModel;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserMapper implements RowMapper<UserModel> {
    @Override
    public UserModel mapRow(ResultSet rs) {
        UserModel user= new UserModel();
        try {
            user.setId(rs.getLong("id"));
            user.setAvatar(rs.getString("avatar"));
            user.setEmail(rs.getString("email"));
            user.setGgID(rs.getString("ggID"));
            user.setFbID(rs.getString("fbID"));
            user.setLastOnline(rs.getTimestamp("lastOnline"));
            user.setPagePhoto(rs.getString("pagePhoto"));
            user.setCreatedBy(rs.getString("createdBy"));
            user.setCreatedDate(rs.getTimestamp("createdDate"));
            user.setDescription(rs.getString("description"));
            user.setStatus(rs.getInt("status"));
            user.setName(rs.getString("name"));
            user.setThumbnail(rs.getString("thumbnail"));
            user.setTitle(rs.getString("title"));
            user.setType(rs.getString("type"));
            user.setModifiedBy(rs.getString("modifiedBy"));
            user.setModifiedDate(rs.getTimestamp("modifiedDate"));
        }
         catch (SQLException e) {
             System.out.println("ResultSet UserModel error:"+e.getMessage());
             return null;
        }
        return user;
    }
}
