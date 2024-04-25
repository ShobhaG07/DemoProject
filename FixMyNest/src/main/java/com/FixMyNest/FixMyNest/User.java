package com.FixMyNest.FixMyNest;


import jakarta.persistence.*;

import lombok.Data;
//import javax.persistence.*;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String fullName;

    // Add more fields as needed (e.g., role, phone number, location)

}
