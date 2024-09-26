package com.wen1.repository;

import com.wen1.model.IngredientCategory;
import com.wen1.model.IngredientsItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientItemRepository extends JpaRepository<IngredientsItem, Long> {

    List<IngredientsItem> findByRestaurantId(Long id);

}
