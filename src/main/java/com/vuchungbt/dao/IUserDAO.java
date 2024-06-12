package com.vuchungbt.dao;

import com.vuchungbt.model.UserModel;

public interface IUserDAO extends GenericDAO<UserModel> {
    UserModel findByFbIDAndStatus(String userName, String password, Integer status);

}
