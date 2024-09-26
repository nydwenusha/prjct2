package com.wen1.service;

import com.wen1.model.Category;

import java.util.List;

public interface CategoryService {

    public Category createCategory(String name,Long userId);

    public List<Category> findCategoryByRestaurantId(Long id) throws Exception;

    public Category findCategoryById(Long id) throws Exception;


}
