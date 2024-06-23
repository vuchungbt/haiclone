package com.vuchungbt.service.impl;

import com.vuchungbt.dao.IUserDAO;
import com.vuchungbt.dao.impl.UserDAO;
import com.vuchungbt.model.UserModel;
import com.vuchungbt.service.IUserService;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.inject.Named;
//@Named
//@RequestScoped
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
}
