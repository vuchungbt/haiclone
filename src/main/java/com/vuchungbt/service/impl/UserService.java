package com.vuchungbt.service.impl;

import com.vuchungbt.dao.impl.UserDAO;
import com.vuchungbt.model.UserModel;
import com.vuchungbt.service.IUserService;

public class UserService implements IUserService {

    private UserDAO userDAO;
    public UserService() {
        userDAO= new UserDAO();
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
