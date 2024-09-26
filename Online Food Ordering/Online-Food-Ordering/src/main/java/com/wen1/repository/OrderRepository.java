package com.wen1.repository;

import com.wen1.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order,Long> {

    public List<Order> findByCustomerId(Long userId);

    public List<Order>findByRestaurantId(Long restaurantId);
}
