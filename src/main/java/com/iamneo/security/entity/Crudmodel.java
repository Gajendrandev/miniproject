package com.iamneo.security.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="employee")
public class Crudmodel {
      @Id
      @Column(name="empid")
      private int empid;
      @Column(name="empname")
      private String empname;
      @Column(name="dob")
      private String dob;
      @Column(name="email")
      private String email;
      @Column(name="password")
      private String password;
      @Column(name="gender")
      private String gender;
      @Column(name="mobile")
      private Long mobile;
      @Column(name="address")
      private String address;
   
      
}