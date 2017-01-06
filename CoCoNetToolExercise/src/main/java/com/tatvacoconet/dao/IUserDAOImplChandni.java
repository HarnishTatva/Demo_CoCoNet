package com.tatvacoconet.dao;

import java.util.List;

import com.tatvacoconet.entity.UserMasterChandni;

/**
 * 
 * @author TatvaSoft
 *
 */
public interface IUserDAOImplChandni {
	public List<UserMasterChandni> getUserList();
	void deleteUser(Integer userId);
	void createUser(UserMasterChandni user);
	void updateUser(UserMasterChandni user);
	UserMasterChandni findEntity(Integer userId);
	UserMasterChandni findUserByEmail(String email);
}
