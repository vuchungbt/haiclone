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

}
