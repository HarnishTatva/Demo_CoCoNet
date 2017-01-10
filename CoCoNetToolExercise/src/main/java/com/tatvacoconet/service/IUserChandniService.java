package com.tatvacoconet.service;

import java.util.List;

import com.tatvacoconet.entity.UserMasterChandni;


public interface IUserChandniService {
	List<UserMasterChandni> getUserList();
	void deleteUser(Integer userId);
	void createUser(UserMasterChandni user);
	void updateUser(UserMasterChandni user);
	UserMasterChandni find(Integer userId);
	UserMasterChandni findUserByEmail(String email);
	@SuppressWarnings("rawtypes")
	List getUsersByCity();
}
