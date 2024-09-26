package com.wen1.service;

import com.wen1.model.User;
import jdk.jshell.spi.ExecutionControl;

public interface UserService {

    public User findUserByJwtToken(String jwt) throws Exception;

    public User FindUserByEmail(String email) throws Exception;

    User findUserByEmail(String email) throws Exception;
}
