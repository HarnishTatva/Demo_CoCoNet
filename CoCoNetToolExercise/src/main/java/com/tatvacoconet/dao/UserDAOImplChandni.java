package com.tatvacoconet.dao;

import java.util.Date;
import java.util.List;
import java.util.function.Consumer;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;

import org.slf4j.Logger;
import com.tatvacoconet.controller.HomeController;
import com.tatvacoconet.entity.UserMasterChandni;

/**
 * 
 * @author TatvaSoft
 *
 */
@Repository
public class UserDAOImplChandni extends TatvaSoftDAOImpl<UserMasterChandni, Integer> implements IUserDAOImplChandni 
{
	public UserDAOImplChandni() {
		super(UserMasterChandni.class);
	}
	
	@Override
	public List<UserMasterChandni> getUserList() {
		return findAll(); 
	}
	
	@Override
	public void deleteUser(Integer userId) {
		delete(userId);
	}
	
	@Override
	public void createUser(UserMasterChandni user) {
		user.setCreatedOn(new Date());
		save(user);
	}

	@Override
	public void updateUser(UserMasterChandni user) {
		UserMasterChandni userObj = findEntity(user.getUserId());
		user.setCreatedOn(userObj.getCreatedOn());
		user.setUpdatedOn(new Date());
		persist(user);
	}
	
	@Override
	public UserMasterChandni findEntity(Integer userId) {
		return find(userId);
	}
	
	@Override
	public UserMasterChandni findUserByEmail(String email) {

		List<UserMasterChandni> userList = findAll();
		for(UserMasterChandni user : userList){
			 while(user.getUserEmail().equals(email))
			 {
				 return user;
			 }
		}
		return null;
	}
}
