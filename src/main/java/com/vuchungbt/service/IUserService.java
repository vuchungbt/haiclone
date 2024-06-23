package com.vuchungbt.service;

import com.vuchungbt.model.UserModel;

import javax.enterprise.context.RequestScoped;
import javax.inject.Named;


public interface IUserService {
    Long save(UserModel userModel);
    UserModel findByFbID(String fbID);
    UserModel findByGgID(String ggID);
}
