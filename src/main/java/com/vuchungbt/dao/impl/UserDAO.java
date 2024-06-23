package com.vuchungbt.dao.impl;

import com.vuchungbt.dao.IUserDAO;
import com.vuchungbt.mapper.UserMapper;
import com.vuchungbt.model.UserModel;

import javax.enterprise.context.RequestScoped;
import javax.inject.Named;
import java.util.List;

@Named
@RequestScoped
public class UserDAO extends AbstractDAO<UserModel> implements IUserDAO  {
    @Override
    public UserModel findByFbID(String fbID ) {
        StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
        sql.append(" INNER JOIN roles AS r ON r.id = u.roleid");
        sql.append(" WHERE fbID = ?");
        List<UserModel> users = query(sql.toString(), new UserMapper(), fbID);
        return users.isEmpty() ? null : users.get(0);
    }

    @Override
    public UserModel findByGgID(String ggID) {
        StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
        sql.append(" INNER JOIN roles AS r ON r.id = u.roleid");
        sql.append(" WHERE ggID = ?");
        List<UserModel> users = query(sql.toString(), new UserMapper(), ggID);
        return users.isEmpty() ? null : users.get(0);
    }

    @Override
    public UserModel findByID(String id) {
        StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
        sql.append(" INNER JOIN roles AS r ON r.id = u.roleid");
        sql.append(" WHERE id = ?");
        List<UserModel> users = query(sql.toString(), new UserMapper(), id);
        return users.isEmpty() ? null : users.get(0);
    }

    @Override
    public UserModel findByEmail(String email) {
        StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
        sql.append(" INNER JOIN roles AS r ON r.id = u.roleid");
        sql.append(" WHERE email = ?");
        List<UserModel> users = query(sql.toString(), new UserMapper(), email);
        return users.isEmpty() ? null : users.get(0);
    }

    @Override
    public Long save(UserModel userModel) {
        StringBuilder sql = new StringBuilder("INSERT INTO users(fbID,ggID,name,thumbnail,email)");
        sql.append(" values(?,?,?,?,?)");
        return insert(sql.toString(),userModel.getFbID(), userModel.getGgID(),userModel.getName()
                ,userModel.getThumbnail(),userModel.getEmail());
    }
}
