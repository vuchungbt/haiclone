package com.vuchungbt.service.impl;

import com.vuchungbt.dao.ICommentDAO;
import com.vuchungbt.model.CommentModel;
import com.vuchungbt.service.ICommentService;
import com.vuchungbt.service.IUserService;

import javax.inject.Inject;
import java.util.List;

public class CommentService implements ICommentService {
    @Inject
    private ICommentDAO commentDAO;
    @Inject
    private IUserService userService;
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
        List<CommentModel> list= commentDAO.findByPostID(idPost);
        createdEntity(list);
        return list;
    }

    @Override
    public List<CommentModel> findByPostID(Long idPost, int page) {
        List<CommentModel> list= commentDAO.findByPostID(idPost,page);
        createdEntity(list);
        return list;
    }

    @Override
    public List<CommentModel> findByPostIDAndFirstLevel(Long idPost) {
        List<CommentModel> list= commentDAO.findByPostIDAndFirstLevel(idPost);
        createdEntity(list);
        return list;
    }

    @Override
    public List<CommentModel> findByPostIDAndFirstLevel(Long idPost, int page) {
        List<CommentModel> list= commentDAO.findByPostIDAndFirstLevel(idPost,page);
        createdEntity(list);
        return list;
    }

    @Override
    public List<CommentModel> findByParentID(Long idParent) {
        List<CommentModel> list= commentDAO.findByParentID(idParent);
        createdEntity(list);
        return list;
    }

    @Override
    public List<CommentModel> findByParentID(Long idParent, int page) {
        List<CommentModel> list= commentDAO.findByParentID(idParent,page);
        createdEntity(list);
        return list;
    }

    private void createdEntity(List<CommentModel> list){
        list.forEach(cmtModel -> {
            cmtModel.setCreated(userService.findByID(cmtModel.getAuthId()));
        });
    };
}
