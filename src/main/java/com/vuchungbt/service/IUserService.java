package com.vuchungbt.service;

import com.vuchungbt.model.UserModel;

public interface IUserService {
    UserModel findByFbID(String fbID);

    UserModel findByGgID(String ggID);

    UserModel findByID(String id);

    UserModel findByEmail(String email);

    Long save(UserModel userModel);
}
