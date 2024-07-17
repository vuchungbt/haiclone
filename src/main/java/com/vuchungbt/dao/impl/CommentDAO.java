package com.vuchungbt.dao.impl;

import com.vuchungbt.dao.ICommentDAO;
import com.vuchungbt.mapper.CommentMapper;
import com.vuchungbt.model.CommentModel;

import java.util.List;

public class CommentDAO extends AbstractDAO<CommentModel> implements ICommentDAO {
    @Override
    public Long save(CommentModel commentModel) {
        StringBuilder sql = new StringBuilder("INSERT INTO comments ");
        sql.append(" (name, status ,created_by,type,title,thumbnail,description,content,level,for_post,auth_id)");
        sql.append(" VALUES(?, ?, ?, ?, ?, ?,?, ?, ?, ?,?)");
        return insert(sql.toString(),commentModel.getName(),commentModel.getStatus(),commentModel.getCreatedDate(),commentModel.getCreatedBy(),
                commentModel.getType(),commentModel.getTitle(),commentModel.getThumbnail(),commentModel.getDescription(),commentModel.getContent(),commentModel.getLevel(),
                commentModel.getForPost(),commentModel.getAuthId()
        );
    }

    @Override
    public void update(CommentModel commentModel) {
        StringBuilder sql = new StringBuilder("UPDATE comments SET name=?,");
        sql.append(" description=?,");
        sql.append(" content=?,");
        sql.append(" updated_by=?,");
        sql.append(" status=?,");
        sql.append(" thumbnail=?,");
        sql.append(" title=?,");
        sql.append(" type=?,");
        sql.append(" level=?,");
        sql.append(" level=?,");
        sql.append(" auth_id=?");
        sql.append(" WHERE id = ?");
        update(sql.toString(), commentModel.getDescription(),commentModel.getContent(),
                commentModel.getModifiedBy(),commentModel.getStatus(),commentModel.getThumbnail(),
                commentModel.getTitle(),commentModel.getType(),commentModel.getLevel(),commentModel.getAuthId(),commentModel.getForPost(),
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
        StringBuilder sql = new StringBuilder("SELECT cmt.* , COUNT(cv.user_id) AS vote_count FROM comments cmt");
        sql.append(" LEFT JOIN comment_has_votes cv ON cmt.id = cv.comment_id");
        sql.append(" WHERE cmt.for_post = ?");
        sql.append(" GROUP BY cmt.id");
        return query(sql.toString(), new CommentMapper(), idPost);
    }

    @Override
    public List<CommentModel> findByPostID(Long idPost, int page) {
        int record = 5;
        if(page==0) page=1;
        String sql_limit=" LIMIT "+ record + " OFFSET " + (page-1)*record ;

        StringBuilder sql = new StringBuilder("SELECT cmt.* , COUNT(cv.user_id) AS vote_count FROM comments cmt");
        sql.append(" LEFT JOIN comment_has_votes cv ON cmt.id = cv.comment_id");
        sql.append(" WHERE cmt.for_post = ?");
        sql.append(" GROUP BY cmt.id");
        sql.append(sql_limit);

        return query(sql.toString(), new CommentMapper(), idPost);
    }

    @Override
    public List<CommentModel> findByPostIDAndFirstLevel(Long idPost) {
        StringBuilder sql = new StringBuilder("SELECT cmt.* , COUNT(cv.user_id) AS vote_count FROM comments cmt");
        sql.append(" LEFT JOIN comment_has_votes cv ON cmt.id = cv.comment_id");
        sql.append(" WHERE cmt.for_post = ?");
        sql.append(" and cmt.level = 0");
        sql.append(" GROUP BY cmt.id");
        return query(sql.toString(), new CommentMapper(), idPost);
    }

    @Override
    public List<CommentModel> findByPostIDAndFirstLevel(Long idPost, int page) {
        int record = 5;
        if(page==0) page=1;
        String sql_limit=" LIMIT "+ record + " OFFSET " + (page-1)*record ;
        StringBuilder sql = new StringBuilder("SELECT cmt.* , COUNT(cv.user_id) AS vote_count FROM comments cmt");
        sql.append(" LEFT JOIN comment_has_votes cv ON cmt.id = cv.comment_id");
        sql.append(" WHERE cmt.for_post = ?");
        sql.append(" and cmt.level = 0");
        sql.append(" GROUP BY cmt.id");
        sql.append(sql_limit);
        return query(sql.toString(), new CommentMapper(), idPost);
    }

    @Override
    public List<CommentModel> findByParentID(Long idParent) {
        StringBuilder sql = new StringBuilder("SELECT * FROM comments");
        sql.append(" WHERE parent_comment_id = ?");
        return query(sql.toString(), new CommentMapper(), idParent);
    }

    @Override
    public List<CommentModel> findByParentID(Long idParent, int page) {
        int record = 5;
        String sql = "SELECT * FROM comments WHERE parent_comment_id = ?";
        sql+=" LIMIT "+ record + " OFFSET " + (page-1)*record ;
        return query(sql, new CommentMapper(), idParent);
    }
}
