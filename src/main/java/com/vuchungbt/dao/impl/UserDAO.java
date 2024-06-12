package com.vuchungbt.dao.impl;

import com.vuchungbt.dao.IUserDAO;
import com.vuchungbt.mapper.UserMapper;
import com.vuchungbt.model.UserModel;

import java.util.List;

public class UserDAO extends AbstractDAO<UserModel> implements IUserDAO  {
    @Override
    public UserModel findByUserNameAndPasswordAndStatus(String userName, String password, Integer status) {
        StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
        sql.append(" INNER JOIN roles AS r ON r.id = u.roleid");
        sql.append(" WHERE username = ? AND password = ? AND status = ?");
        List<UserModel> users = query(sql.toString(), new UserMapper(), userName, password, status);
        return users.isEmpty() ? null : users.get(0);
    }
}
