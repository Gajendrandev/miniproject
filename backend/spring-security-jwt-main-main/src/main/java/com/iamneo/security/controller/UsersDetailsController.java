package com.iamneo.security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.dto.response.UsersDetailsResponse;
import com.iamneo.security.entity.Attendance;
import com.iamneo.security.entity.UsersDetails;
import com.iamneo.security.repository.UsersDetailsRepository;
import com.iamneo.security.service.UserDetailService;

import lombok.RequiredArgsConstructor;


@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/user")
public class UsersDetailsController {
    @Autowired
          
	
	    UserDetailService s;
	   
		
		@PostMapping("/post")
		public UsersDetails addInfo(@RequestBody UsersDetails st) {
			return s.saveDetails(st);
		} 
		
		@GetMapping("/get")
		public List<UsersDetails> fetchDetails(){
			return s.getDetails();
		}
		@GetMapping("/get/{concertid}")
		public Optional<UsersDetails> fetchDetails(@PathVariable Long concertid){
			return s.getDetails(concertid);
		} 
		
		@PutMapping("/put")
		public UsersDetails updateInfo(@RequestBody UsersDetails st1) {
			return s.updateDetails(st1);
		}
		@DeleteMapping("/delete/{concertid}")
		public String deleteInfo(@PathVariable("concertid")Long concertid) {
			s.deleteDetails(concertid);
			return "The element is deleted";
		}
}
