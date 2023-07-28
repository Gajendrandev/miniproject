package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="_user_details")
public class UsersDetails {
    @Id
      private Long empid;
      private String empname;
      private String dob;
      private String email;
      private String password;
      private String gender;
      private Long mobile;
      private String address;
}
 