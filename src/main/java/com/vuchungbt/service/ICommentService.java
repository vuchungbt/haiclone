package com.vuchungbt.service;

import com.vuchungbt.model.CommentModel;

import java.util.List;

public interface ICommentService {
    CommentModel save(CommentModel commentModel);
    CommentModel update(CommentModel commentModel);
    void delete(Long id);
    CommentModel findByID(Long id);
    List<CommentModel> findByPostID(Long idPost);
    List<CommentModel> findByPostID(Long idPost, int page);

}
