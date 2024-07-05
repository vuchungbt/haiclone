package com.vuchungbt.service.impl;

import com.vuchungbt.dao.IPostDAO;
import com.vuchungbt.model.PostModel;
import com.vuchungbt.model.UserModel;
import com.vuchungbt.service.IPostService;

import javax.inject.Inject;
import java.sql.Timestamp;
import java.util.Collections;
import java.util.List;

public class PostService implements IPostService {

    @Inject
    private IPostDAO postDAO;

    @Override
    public PostModel findByID(Long id) {
        return postDAO.findByID(id);
    }

    @Override
    public PostModel save(PostModel postModel) {
        Long id = postDAO.save(postModel);
        return postDAO.findByID(id);
    }

    @Override
    public PostModel update(PostModel postModel) {
        postDAO.update(postModel);
        return postDAO.findByID(postModel.getId());
    }

    @Override
    public void delete(long id) {
        postDAO.delete(id);
    }

    @Override
    public int count() {
        return postDAO.count();
    }

    @Override
    public List<PostModel> findAll() {
        return postDAO.findAll();
    }

    @Override
    public List<PostModel> findAll(int page) {
        return postDAO.findAll(page);
    }
}
