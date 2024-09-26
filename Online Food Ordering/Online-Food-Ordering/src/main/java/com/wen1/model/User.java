package com.wen1.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.wen1.dto.RestaurantDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fullName;

    private String email;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;


    private USER_ROLE role=USER_ROLE.ROLE_CUSTOMER;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "customer")
    private List<Order> orders = new ArrayList<>();

    @ElementCollection
    private List<RestaurantDto>favorites=new ArrayList();

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Address> addresses = new ArrayList<>();

    public Long getId() {
        return id;
    }


    public List<RestaurantDto> getFavorites() {
        return favorites;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {

    }

    public Object getFullName() {
        return fullName;
    }


    public void setFullName(Object fullName) {
    }


    public Object getRole() {
        return role;
    }


    public void setRole(Object role) {
    }

    public void setPassword(String encode) {
    }

    public CharSequence getPassword() {
        return password;
    }
}

