package com.vuchungbt.dao.impl;

import com.vuchungbt.dao.IPostDAO;
import com.vuchungbt.mapper.PostMapper;
import com.vuchungbt.mapper.RowMapper;
import com.vuchungbt.model.PostModel;

import java.util.Collections;
import java.util.List;

public class PostDAO extends AbstractDAO<PostModel> implements IPostDAO {

    @Override
    public PostModel findByID(Long id) {
        StringBuilder sql = new StringBuilder("SELECT * FROM posts");
        sql.append(" WHERE id = ?");
        return findOne(sql.toString(), new PostMapper(), id);
    }

    @Override
    public void update(PostModel newPost) {
        StringBuilder sql = new StringBuilder("UPDATE posts SET name=?,");
        sql.append(" description=?,");
        sql.append(" short_description=?,");
        sql.append(" content=?,");
        sql.append(" refer=?,");
        sql.append(" source=?,");
        sql.append(" source_name=?,");
        sql.append(" updated_by=?,");
        sql.append(" status=?,");
        sql.append(" thumbnail=?,");
        sql.append(" title=?,");
        sql.append(" publish_date=?,");
        sql.append(" verified_date=?,");
        sql.append(" type=?");
        sql.append(" WHERE id = ?");
        update(sql.toString(),newPost.getDescription(),newPost.getShortDescription(),newPost.getContent(),
                newPost.getRefer(),newPost.getSource(),newPost.getSourceName(),newPost.getModifiedBy(),newPost.getStatus(),newPost.getThumbnail(),newPost.getTitle(),
                newPost.getPublishDate(),newPost.getVerifiedDate(),newPost.getType(),
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
        sql.append(" (name,publish_date,verified_date, status ,created_by,type,title,thumbnail,description,short_description,source,source_name,refer,content,auth_id)");
        sql.append(" VALUES(?, ?,?,?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?,?,?)");
        return insert(sql.toString(),postModel.getName(),postModel.getStatus(),postModel.getCreatedBy(),
                postModel.getType(),postModel.getTitle(),postModel.getThumbnail(),postModel.getDescription(),postModel.getShortDescription(),postModel.getSource(),
                postModel.getRefer(), postModel.getContent(),postModel.getAuthId()
        );
    }

    @Override
    public int count() {
        String sql = "SELECT count(*) FROM posts";
        return count(sql);
    }

    @Override
    public List<PostModel> findAll() {
        String sql = "SELECT * FROM posts";
        return query(sql,new PostMapper());
    }

    @Override
    public List<PostModel> findAll(int page) {
        if(page==0) page=1;
        int record = 10;
        StringBuilder sql = new StringBuilder("SELECT p.*, COUNT(pv.user_id) AS vote_count, ROUND(AVG(pv.vote), 2) AS avg_vote ");
        sql.append(" FROM posts p");
        sql.append(" LEFT JOIN post_has_votes pv ON p.id = pv.post_id");
        sql.append(" GROUP BY p.id");
        sql.append(" LIMIT "+ record + " OFFSET " + (page-1)*record ) ;
        return query(sql.toString(),new PostMapper());
    }

    @Override
    public List<PostModel> findTop(int page) {
        if(page==0) page=1;
        int record = 10;
        StringBuilder sql = new StringBuilder("SELECT p.*, COUNT(pv.user_id) AS vote_count, ROUND(AVG(pv.vote), 2) AS avg_vote ");
        sql.append(" FROM posts p");
        sql.append(" LEFT JOIN post_has_votes pv ON p.id = pv.post_id");
        sql.append(" GROUP BY p.id");
        sql.append(" ORDER BY vote_count DESC");
        sql.append(" LIMIT "+ record + " OFFSET " + (page-1)*record ) ;
        return query(sql.toString(),new PostMapper());
    }

    @Override
    public List<PostModel> findTrending(int page) {
        return findTop(page);
    }

}
