package com.vuchungbt.dao;

import com.vuchungbt.model.PostModel;

import java.util.List;

public interface IPostDAO extends GenericDAO<PostModel>{
    PostModel findByID(String id);
    void update(PostModel newPost);
    void delete(long id);
    Long save(PostModel postModel);
    int count();
    List<PostModel> findAll();
    List<PostModel> findAll(int page);
}
