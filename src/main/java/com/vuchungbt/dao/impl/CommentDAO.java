package com.vuchungbt.dao.impl;

import com.vuchungbt.dao.ICommentDAO;
import com.vuchungbt.mapper.CommentMapper;
import com.vuchungbt.model.CommentModel;

import java.util.List;

public class CommentDAO extends AbstractDAO<CommentModel> implements ICommentDAO {
    @Override
    public Long save(CommentModel commentModel) {
        StringBuilder sql = new StringBuilder("INSERT INTO comments ");
        sql.append(" (name, status ,created_date,created_by,type,title,thumbnail,description,content,level,for_post)");
        sql.append(" VALUES(?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?)");
        return insert(sql.toString(),commentModel.getName(),commentModel.getStatus(),commentModel.getCreatedDate(),commentModel.getCreatedBy(),
                commentModel.getType(),commentModel.getTitle(),commentModel.getThumbnail(),commentModel.getDescription(),commentModel.getContent(),commentModel.getLevel(),
                commentModel.getForPost()
        );
    }

    @Override
    public void update(CommentModel commentModel) {
        StringBuilder sql = new StringBuilder("UPDATE comments SET name=?,");
        sql.append(" created_by=?,");
        sql.append(" created_date=?,");
        sql.append(" description=?,");
        sql.append(" content=?,");
        sql.append(" updated_by=?,");
        sql.append(" updated_date=?,");
        sql.append(" status=?,");
        sql.append(" thumbnail=?,");
        sql.append(" title=?,");
        sql.append(" type=?,");
        sql.append(" level=?,");
        sql.append(" for_post=?");
        sql.append(" WHERE id = ?");
        update(sql.toString(), commentModel.getCreatedBy(),commentModel.getCreatedDate(),commentModel.getDescription(),commentModel.getContent(),
                commentModel.getModifiedBy(),commentModel.getModifiedDate(),commentModel.getStatus(),commentModel.getThumbnail(),
                commentModel.getTitle(),commentModel.getType(),commentModel.getLevel(),commentModel.getForPost(),
                commentModel.getId());
    }

    @Override
    public void delete(Long id) {
        String sql = "DELETE FROM comments WHERE id = ?";
        delete(sql, id);
    }


    @Override
    public CommentModel findByID(Long id) {
        StringBuilder sql = new StringBuilder("SELECT * FROM comments");
        sql.append(" WHERE id = ?");
        return findOne(sql.toString(), new CommentMapper(), id);
    }

    @Override
    public List<CommentModel> findByPostID(Long idPost) {
        StringBuilder sql = new StringBuilder("SELECT * FROM comments");
        sql.append(" WHERE forPost = ?");
        return query(sql.toString(), new CommentMapper(), idPost);
    }

    @Override
    public List<CommentModel> findByPostID(Long idPost, int page) {
        int record = 5;
        String sql = "SELECT * FROM comments WHERE for_post = ?";
        sql+=" LIMIT "+ record + " OFFSET " + (page-1)*record ;
        return query(sql, new CommentMapper(), idPost);
    }
}
