package com.wen1.service;

import com.wen1.model.Order;
import com.wen1.model.User;
import com.wen1.request.OrderRequest;

import java.util.List;

public interface OrderService {

    public Order createOrder(OrderRequest order, User user);

    public Order updateOrder(Long orderId, String orderStatus) throws Exception;

    public void calcelOrder(Long orderId) throws Exception;

    public List<Order> getUsersOrder(Long userId) throws Exception;

    public List<Order> getRestaurantsOrder(Long restaurantId,String orderStatus) throws Exception;

    public Order findOrderById(Long orderId) throws Exception;
}
