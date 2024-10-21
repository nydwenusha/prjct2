package com.wen1.response;
import lombok.Data;

public class MessageResponse {
    private String message;



    //---------------------------------------------


    // Default constructor
    public MessageResponse() {
    }

    // Constructor with message
    public MessageResponse(String message) {
        this.message = message;
    }

    // Getter for message
    public String getMessage() {
        return message;
    }

    // Setter for message
    public void setMessage(String message) {
        this.message = message;
    }
}
