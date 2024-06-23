package com.vuchungbt.dao;

import com.vuchungbt.model.PostModel;

public interface IPostDAO extends GenericDAO<PostModel>{
    PostModel findByID(String id);
}
