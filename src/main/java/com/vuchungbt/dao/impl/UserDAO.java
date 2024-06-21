package com.vuchungbt.dao.impl;

import com.vuchungbt.dao.IUserDAO;
import com.vuchungbt.mapper.UserMapper;
import com.vuchungbt.model.UserModel;

import java.util.List;

public class UserDAO extends AbstractDAO<UserModel> implements IUserDAO  {
    @Override
    public UserModel findByFbID(String fbID ) {
        StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
        sql.append(" INNER JOIN roles AS r ON r.id = u.roleid");
        sql.append(" WHERE fbID = ?");
        return findOne(sql.toString(), new UserMapper(), fbID);
    }

    @Override
    public UserModel findByGgID(String ggID) {
        StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
        sql.append(" INNER JOIN roles AS r ON r.id = u.roleid");
        sql.append(" WHERE ggID = ?");
        return findOne(sql.toString(), new UserMapper(), ggID);
    }

    @Override
    public UserModel findByID(String id) {
        StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
        sql.append(" INNER JOIN roles AS r ON r.id = u.roleid");
        sql.append(" WHERE id = ?");
        return findOne(sql.toString(), new UserMapper(), id);
    }

    @Override
    public UserModel findByEmail(String email) {
        StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
        sql.append(" INNER JOIN roles AS r ON r.id = u.roleid");
        sql.append(" WHERE email = ?");
        return findOne(sql.toString(), new UserMapper(), email);
    }

}
