package com.tatvacoconet.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.function.Consumer;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
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
	private Logger logger = LoggerFactory.getLogger(UserDAOImplChandni.class);
	
	@Autowired
	private SessionFactory sessionFactory;
	
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
	
	@SuppressWarnings("rawtypes")
	@Override
	public List getUsersByCity() {
		try{
			Query query = sessionFactory.getCurrentSession().createSQLQuery("SELECT user_city, count(*) from user_chandni GROUP BY user_city");
			return query.list();
		}catch(Exception ex){
			logger.error("Error Message >>>>>>>>>>>> " + ex.getMessage());
			return null;
		}
	}
}
