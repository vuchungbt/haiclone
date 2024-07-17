package com.vuchungbt.dao;

import com.vuchungbt.model.CommentModel;

import java.util.List;

public interface ICommentDAO extends GenericDAO<CommentModel>{
    Long save(CommentModel commentModel);
    void update(CommentModel commentModel);
    void delete(Long id);
    CommentModel findByID(Long id);
    List<CommentModel> findByPostID(Long idPost);
    List<CommentModel> findByPostID(Long idPost, int page);
    List<CommentModel> findByPostIDAndFirstLevel(Long idPost);
    List<CommentModel> findByPostIDAndFirstLevel(Long idPost, int page);
    List<CommentModel> findByParentID(Long idParent);
    List<CommentModel> findByParentID(Long idParent, int page);

}
