package com.vuchungbt.service.impl;

import com.vuchungbt.dao.IUserDAO;
import com.vuchungbt.dao.impl.UserDAO;
import com.vuchungbt.model.UserModel;
import com.vuchungbt.service.IUserService;

import javax.inject.Inject;
import java.sql.Timestamp;

public class UserService implements IUserService {

    @Inject
    private IUserDAO userDAO;

    @Override
    public UserModel findByFbID(String fbID) {
        return userDAO.findByFbID(fbID);
    }

    @Override
    public UserModel findByGgID(String ggID) {
        return userDAO.findByGgID(ggID);
    }

    @Override
    public UserModel findByID(Long id) {
        return userDAO.findByID(id);
    }

    @Override
    public UserModel findByEmail(String email) {
        return userDAO.findByEmail(email);
    }

    @Override
    public UserModel save(UserModel userModel) {
        userModel.setCreatedDate(new Timestamp(System.currentTimeMillis()));
        Long iduser = userDAO.save(userModel);
        return userDAO.findByID(iduser);
    }

    @Override
    public UserModel update(UserModel userModel) {
        UserModel oldUser = userDAO.findByID(userModel.getId());
        userModel.setCreatedDate(oldUser.getCreatedDate());
        userModel.setCreatedBy(oldUser.getCreatedBy());
        userModel.setModifiedDate(new Timestamp(System.currentTimeMillis()));
        userDAO.update(userModel);
        return userDAO.findByID(userModel.getId());
    }

    @Override
    public void delete(long id) {
        userDAO.delete(id);
    }

    @Override
    public int count() {
        return userDAO.count();
    }
}
