package com.vuchungbt.service;

import com.vuchungbt.model.UserModel;

public interface IUserService {
    UserModel findByFbID(String fbID);
    UserModel findByGgID(String ggID);
    UserModel findByID(Long id);
    UserModel findByEmail(String email);
    UserModel save(UserModel userModel);
    UserModel update(UserModel userModel);
    void delete(long id);
    int count();


}
