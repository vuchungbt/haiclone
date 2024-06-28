package com.vuchungbt.mapper;

import com.vuchungbt.model.RoleModel;
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
            user.setLastOnline(rs.getTimestamp("last_online"));
            user.setPagePhoto(rs.getString("page_photo"));
            user.setCreatedBy(rs.getString("created_by"));
            user.setCreatedDate(rs.getTimestamp("created_date"));
            user.setDescription(rs.getString("description"));
            user.setStatus(rs.getInt("status"));
            user.setName(rs.getString("name"));
            user.setThumbnail(rs.getString("thumbnail"));
            user.setTitle(rs.getString("title"));
            user.setTitle(rs.getString("tel"));
            user.setType(rs.getString("type"));
            user.setModifiedBy(rs.getString("updated_by"));
            user.setModifiedDate(rs.getTimestamp("updated_date"));
            try{
                RoleModel role = new RoleModel();
                role.setCode(rs.getString("code"));
                role.setName(rs.getString("name"));
                user.setRoleModel(role);
            }catch (Exception e){
                System.out.println(e.getMessage());
            }
        }
         catch (SQLException e) {
             System.out.println("ResultSet UserModel error:"+e.getMessage());
             return null;
        }
        return user;
    }
}
