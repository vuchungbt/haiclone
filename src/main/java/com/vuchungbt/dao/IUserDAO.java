package com.vuchungbt.dao;

import com.vuchungbt.model.UserModel;

public interface IUserDAO extends GenericDAO<UserModel> {
    UserModel findByFbID(String fbID);
    UserModel findByGgID(String ggID);
    UserModel findByID(String id);
    UserModel findByEmail(String email);
    Long save(UserModel userModel);
}
