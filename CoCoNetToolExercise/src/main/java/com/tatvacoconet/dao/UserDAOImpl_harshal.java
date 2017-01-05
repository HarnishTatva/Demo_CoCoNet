package com.tatvacoconet.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.springframework.stereotype.Repository;

import com.tatvacoconet.entity.UserMaster_harshal;

/**
 * @author TatvaSoft
 *
 */
@Repository
public class UserDAOImpl_harshal extends TatvaSoftDAOImpl<UserMaster_harshal, Integer> implements IUserDAO_harshal {
  
 	public UserDAOImpl_harshal() {
		super(UserMaster_harshal.class);
	}


	@Override
	public void createUser_harshal(UserMaster_harshal user) {
		save(user);
	}


	@Override
	public void updateUser_harshal(UserMaster_harshal user) {
		persist(user);
	}


	@Override
	public void deleteUser_harshal(Integer userId) {
		delete(userId);
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public List<UserMaster_harshal> findAllUsers_harshal() {
		Criteria cr = getSessionFactory().getCurrentSession().createCriteria(UserMaster_harshal.class);
		return cr.list();
	}


	@Override
	public UserMaster_harshal findUserById_harshal(Integer userId) {
		return find(userId);
	}
	  
}