package com.vuchungbt.dao.impl;

import com.vuchungbt.dao.IPostDAO;
import com.vuchungbt.mapper.PostMapper;
import com.vuchungbt.mapper.RowMapper;
import com.vuchungbt.model.PostModel;

import java.util.Collections;
import java.util.List;

public class PostDAO extends AbstractDAO<PostModel> implements IPostDAO {

    @Override
    public PostModel findByID(String id) {
        StringBuilder sql = new StringBuilder("SELECT * FROM posts AS p");
        sql.append(" WHERE id = ?");
        return findOne(sql.toString(), new PostMapper(), id);
    }

    @Override
    public void update(PostModel newPost) {
        StringBuilder sql = new StringBuilder("UPDATE posts SET name=?,");
        sql.append(" createdby=?,");
        sql.append(" createddate=?,");
        sql.append(" description=?,");
        sql.append(" shortdescription=?,");
        sql.append(" content=?,");
        sql.append(" refer=?,");
        sql.append(" source=?,");
        sql.append(" modifiedby=?,");
        sql.append(" modifieddate=?,");
        sql.append(" status=?,");
        sql.append(" thumbnail=?,");
        sql.append(" title=?,");
        sql.append(" type=?");
        sql.append(" WHERE id = ?");
        update(sql.toString(), newPost.getCreatedBy(),newPost.getCreatedDate(),newPost.getDescription(),newPost.getShortdescription(),newPost.getContent(),
                newPost.getRefer(),newPost.getSource(),newPost.getModifiedBy(),newPost.getModifiedDate(),newPost.getStatus(),newPost.getThumbnail(),newPost.getTitle(),newPost.getType(),
                newPost.getId());
    }

    @Override
    public void delete(long id) {
        String sql = "DELETE FROM posts WHERE id = ?";
        delete(sql, id);
    }

    @Override
    public Long save(PostModel postModel) {
        StringBuilder sql = new StringBuilder("INSERT INTO posts ");
        sql.append(" (name, status ,createddate,createdby,type,title,thumbnail,description,shortdescription,source,refer,content)");
        sql.append(" VALUES(?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?)");
        return insert(sql.toString(),postModel.getName(),postModel.getStatus(),postModel.getCreatedDate(),postModel.getCreatedBy(),
                postModel.getType(),postModel.getTitle(),postModel.getThumbnail(),postModel.getDescription(),postModel.getShortdescription(),postModel.getSource(),
                postModel.getRefer(), postModel.getContent()
        );
    }

    @Override
    public int count() {
        String sql = "SELECT count(*) FROM posts";
        return count(sql);
    }

    @Override
    public List<PostModel> findAll() {
        return Collections.emptyList();
    }

    @Override
    public List<PostModel> findAll(int page) {
        return Collections.emptyList();
    }

}
