package com.vuchungbt.dao.impl;

import com.vuchungbt.dao.IUserDAO;
import com.vuchungbt.mapper.UserMapper;
import com.vuchungbt.model.UserModel;
import org.apache.commons.lang3.StringEscapeUtils;

public class UserDAO extends AbstractDAO<UserModel> implements IUserDAO  {
    @Override
    public UserModel findByFbID(String fbID ) {
        StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
        sql.append(" INNER JOIN roles AS r ON r.id = u.roleid");
        sql.append(" WHERE u.fbID = ?");
        return findOne(sql.toString(), new UserMapper(), fbID);
    }

    @Override
    public UserModel findByGgID(String ggID) {
        StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
        sql.append(" INNER JOIN roles AS r ON r.id = u.roleid");
        sql.append(" WHERE u.ggID = ?");
        return findOne(sql.toString(), new UserMapper(), ggID);
    }

    @Override
    public UserModel findByID(Long id) {
        StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
        sql.append(" INNER JOIN roles AS r ON r.id = u.roleid");
        sql.append(" WHERE u.id = ?");
        return findOne(sql.toString(), new UserMapper(), id);
    }

    @Override
    public UserModel findByEmail(String email) {
        StringBuilder sql = new StringBuilder("SELECT * FROM users AS u");
        sql.append(" INNER JOIN roles AS r ON r.id = u.roleid");
        sql.append(" WHERE u.email = ?");
        return findOne(sql.toString(), new UserMapper(), email);
    }

    @Override
    public void update(UserModel newUser) {
        StringBuilder sql = new StringBuilder("UPDATE users SET avatar=?,");
        sql.append(" created_by=?,");
        sql.append(" created_date=?,");
        sql.append(" description=?,");
        sql.append(" email=?,");
        sql.append(" fbID=?,");
        sql.append(" ggID=?,");
        sql.append(" last_online=?,");
        sql.append(" updated_by=?,");
        sql.append(" updated_date=?,");
        sql.append(" name=?,");
        sql.append(" page_photo=?,");
        sql.append(" roleid=?,");
        sql.append(" status=?,");
        sql.append(" thumbnail=?,");
        sql.append(" title=?,");
        sql.append(" tel=?,");
        sql.append(" type=?");
        sql.append(" WHERE id = ?");
        update(sql.toString(),newUser.getAvatar(),newUser.getCreatedBy(),newUser.getCreatedDate(),newUser.getDescription(),
                newUser.getEmail(),newUser.getFbID(),newUser.getGgID(),newUser.getLastOnline(),newUser.getModifiedBy(),newUser.getModifiedDate(),
                newUser.getName(),newUser.getPagePhoto(),newUser.getRoleId(),newUser.getStatus(),newUser.getThumbnail(),newUser.getTitle(),newUser.getTel(),newUser.getType(),
                newUser.getId());
    }

    @Override
    public void delete(long id) {
        String sql = "DELETE FROM users WHERE id = ?";
        delete(sql, id);
    }

    @Override
    public Long save(UserModel userModel) {
        StringBuilder sql = new StringBuilder("INSERT INTO users ");
        sql.append(" (name,fbID ,ggID ,tel, status ,roleid,created_date,created_by,type,title,thumbnail,description,page_photo,avatar,email)");
        sql.append(" VALUES(?,?, ?, ?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?,?)");
        return insert(sql.toString(),userModel.getName(),userModel.getFbID(),userModel.getGgID(),userModel.getTel(),userModel.getStatus(),userModel.getRoleId(),userModel.getCreatedDate(),
                userModel.getCreatedBy(),userModel.getType(),userModel.getTitle(),userModel.getThumbnail(),userModel.getDescription(),userModel.getPagePhoto(),
                userModel.getAvatar(),userModel.getEmail()
        );
    }

    @Override
    public int count() {
        String sql = "SELECT count(*) FROM users";
        return count(sql);
    }

    @Override
    public Long getRoleIDByRoleCode(String roleCode) {
        String sql = "SELECT id as roleid, code as name FROM roles";
        return findOne(sql,new UserMapper(), roleCode).getRoleId();
    }

    @Override
    public String getRoleCodeByRoleId(Long roleId) {
        String sql = "SELECT code FROM roles WHERE id = ?";
//        return findOne(sql,sql,roleId).toString();
        return null;
    }


}
