package com.vuchungbt.dao;

import com.vuchungbt.mapper.RowMapper;

import java.util.List;

public interface GenericDAO<T>{

    <T> List<T> query(String sql, RowMapper<T> rowMapper , Object... param);
    void       update(String sql, Object... param);
    Long       insert(String sql, Object... param);
    void       delete(String sql, Object... param);
    int         count(String sql, Object... param);

}
