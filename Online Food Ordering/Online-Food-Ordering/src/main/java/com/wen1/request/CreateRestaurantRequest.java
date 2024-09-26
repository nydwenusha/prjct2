package com.wen1.request;

import com.wen1.model.Address;

import java.util.List;

public class CreateRestaurantRequest {

    private Address address;          // Field for restaurant address
    private Object contactInformation; // Change Object to appropriate type if known
    private String cuisineType;       // Assuming cuisineType is a String
    private String description;        // Assuming description is a String
    private List<String> images;      // Assuming images is a List of Strings
    private String name;              // Assuming name is a String
    private String openingHours;      // Assuming openingHours is a String

    public Address getAddress() {

         return address;
    }

    public Object getContactInformation() {
        return contactInformation;
    }

    public Object getCuisineType() {
        return cuisineType;
    }

    public Object getDescription() {
        return description;
    }

    public Object getImages() {
        return images;
    }

    public Object getName() {
        return name;
    }

    public Object getOpeningHours() {
        return openingHours;
    }
}
