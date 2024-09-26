package com.wen1.request;

import lombok.Data;

import java.util.List;

@Data
public class AddCartItemRequest {

    private Long foodId;

    private int quantity;

    private List<String> ingredients;

    public Long getFoodId() {
        return foodId;
    }

    public int getQuantity() {
        return quantity;
    }

    public Object getIngredients() {
        return ingredients;
    }
}
