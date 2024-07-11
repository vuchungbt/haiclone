package com.vuchungbt.service.impl;

import com.vuchungbt.dao.IUserDAO;
import com.vuchungbt.model.UserModel;
import com.vuchungbt.service.IUserService;

import javax.inject.Inject;

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
        Long iduser = userDAO.save(userModel);
        System.out.println("SAVE genID"+iduser);
        return userDAO.findByID(iduser);
    }

    @Override
    public UserModel update(UserModel userModel) {
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

    @Override
    public Long getRoleIDByRoleCode(String roleCode) {
        return userDAO.getRoleIDByRoleCode(roleCode);
    }
}
