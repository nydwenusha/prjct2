package com.wen1.response;

import com.wen1.model.USER_ROLE;
import lombok.Data;

@Data
public class AuthResponse {
    private String jwt;
    private String message;
    private USER_ROLE role;

    public void setJwt(String jwt) {
    }

    public void setMessage(String registerSuccess) {
    }

    public void setRole(Object role) {

    }
}
