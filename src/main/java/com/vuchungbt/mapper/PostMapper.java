package com.vuchungbt.mapper;

import com.vuchungbt.model.PostModel;

import java.sql.ResultSet;
import java.sql.SQLException;

public class PostMapper implements RowMapper<PostModel> {
    @Override
    public PostModel mapRow(ResultSet rs) {
        PostModel postModel = new PostModel();
        try {
            postModel.setId(rs.getLong("id"));
            postModel.setSource(rs.getString("source"));
            postModel.setRefer(rs.getString("refer"));
            postModel.setCreatedBy(rs.getString("created_by"));
            postModel.setCreatedDate(rs.getTimestamp("created_date"));
            postModel.setDescription(rs.getString("description"));
            postModel.setStatus(rs.getInt("status"));
            postModel.setName(rs.getString("name"));
            postModel.setThumbnail(rs.getString("thumbnail"));
            postModel.setTitle(rs.getString("title"));
            postModel.setType(rs.getString("type"));
            postModel.setModifiedBy(rs.getString("updated_by"));
            postModel.setModifiedDate(rs.getTimestamp("updated_date"));
        }
        catch (SQLException e) {
            return null;
        }
        return postModel;
    }
}
