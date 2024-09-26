package com.wen1.repository;

import com.wen1.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

import static java.util.stream.DoubleStream.concat;

public interface RestaurantRepository extends JpaRepository<Restaurant,Long> {

    @Query("SELECT r FROM Restaurant  r WHERE lower(r.name) LIKE lower(concat('%',:query, '%')) " +
            "OR lower(r.cuisineType) LIKE lower(concat('%', :query, '%')) ")
    List<Restaurant> findBySearchQuery(String query);

    Restaurant findByOwnerId(Long userId);

}
