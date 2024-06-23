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
            user.setCreatedBy(rs.getString("createdby"));
            user.setCreatedDate(rs.getTimestamp("createddate"));
            user.setDescription(rs.getString("description"));
            user.setStatus(rs.getInt("status"));
            user.setName(rs.getString("name"));
            user.setThumbnail(rs.getString("thumbnail"));
            user.setTitle(rs.getString("title"));
            user.setTitle(rs.getString("tel"));
            user.setType(rs.getString("type"));
            user.setModifiedBy(rs.getString("modifiedby"));
            user.setModifiedDate(rs.getTimestamp("modifieddate"));
        }
         catch (SQLException e) {
             System.out.println("ResultSet UserModel error:"+e.getMessage());
             return null;
        }
        return user;
    }
}
