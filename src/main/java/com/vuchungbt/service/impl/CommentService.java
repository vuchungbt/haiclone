package com.vuchungbt.service.impl;

import com.vuchungbt.dao.ICommentDAO;
import com.vuchungbt.model.CommentModel;
import com.vuchungbt.model.PostModel;
import com.vuchungbt.service.ICommentService;

import javax.inject.Inject;
import java.sql.Timestamp;
import java.util.Collections;
import java.util.List;

public class CommentService implements ICommentService {
    @Inject
    private ICommentDAO commentDAO;
    @Override
    public CommentModel save(CommentModel commentModel) {
        Long id = commentDAO.save(commentModel);
        return commentDAO.findByID(id);
    }

    @Override
    public CommentModel update(CommentModel commentModel) {
        commentDAO.update(commentModel);
        return commentDAO.findByID(commentModel.getId());
    }

    @Override
    public void delete(Long id) {
        commentDAO.delete(id);
    }

    @Override
    public CommentModel findByID(Long id) {
        return commentDAO.findByID(id);
    }

    @Override
    public List<CommentModel> findByPostID(Long idPost) {
        return commentDAO.findByPostID(idPost);
    }

    @Override
    public List<CommentModel> findByPostID(Long idPost, int page) {
        return commentDAO.findByPostID(idPost,page);
    }
}
