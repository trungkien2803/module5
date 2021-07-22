package com.codegym.service;

import com.codegym.model.Product;

import java.util.Optional;

public interface IProductService {
    Iterable<Product> getAll();
    Optional<Product> findById(Long id);
    Product save(Product product);
    void deleteById(Long id);
}
