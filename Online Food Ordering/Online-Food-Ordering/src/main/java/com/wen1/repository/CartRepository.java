package com.wen1.repository;

import com.wen1.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart,Long> {

    public Cart findByCustomerId(Long userId);
}
