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
            postModel.setSourceName(rs.getString("source_name"));
            postModel.setRefer(rs.getString("refer"));
            postModel.setCreatedBy(rs.getString("created_by"));
            postModel.setCreatedDate(rs.getTimestamp("created_date"));
            postModel.setDescription(rs.getString("description"));
            postModel.setStatus(rs.getInt("status"));
            postModel.setName(rs.getString("name"));
            postModel.setThumbnail(rs.getString("thumbnail"));
            postModel.setTitle(rs.getString("title"));
            postModel.setType(rs.getString("type"));
            postModel.setContent(rs.getString("content"));
            postModel.setModifiedBy(rs.getString("updated_by"));
            postModel.setModifiedDate(rs.getTimestamp("updated_date"));
            postModel.setAvgVote(rs.getDouble("avg_vote"));
            postModel.setVoteCount(rs.getInt("vote_count"));
            postModel.setAuthId(rs.getLong("auth_id"));
        }
        catch (SQLException e) {
            System.out.println("PostMapper result null");
            return null;
        }
        return postModel;
    }
}
