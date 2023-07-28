package com.iamneo.security.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.dto.response.UsersDetailsResponse;
import com.iamneo.security.entity.UsersDetails;
import com.iamneo.security.repository.UsersDetailsRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserDetailService {
    @Autowired
    UsersDetailsRepository r;
	     public UsersDetails saveDetails( UsersDetails e) {
	   	  return r.save(e);
	     }
	     public List<UsersDetails> getDetails(){
	   	  return r.findAll();
	     }
	     public Optional<UsersDetails> getDetails(Long concertid){
	      	  return r.findById(concertid);
	        }
	     
	     public UsersDetails updateDetails(UsersDetails e1) {
	   	  return r.saveAndFlush(e1);
	     }
	     public void deleteDetails(Long concertid ) {
	   	  r.deleteById(concertid);
	     }
    
}
