package com.vuchungbt.service.impl;

import com.vuchungbt.dao.IUserDAO;
import com.vuchungbt.model.UserModel;
import com.vuchungbt.service.IUserService;

import javax.inject.Inject;

public class UserService implements IUserService {

    @Inject
    private IUserDAO userDAO;
    @Override
    public Long save(UserModel userModel) {
        return userDAO.save(userModel);
    }
    @Override
    public UserModel findByFbID(String fbID) {
        return userDAO.findByFbID(fbID);
    }

    @Override
    public UserModel findByGgID(String ggID) {
        return userDAO.findByGgID(ggID);
    }

    @Override
    public UserModel findByID(String id) {
        return userDAO.findByID(id);
    }

    @Override
    public UserModel findByEmail(String email) {
        return userDAO.findByEmail(email);
    }
}
