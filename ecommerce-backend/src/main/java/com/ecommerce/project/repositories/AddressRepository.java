package com.ecommerce.project.repositories;

import com.ecommerce.project.models.Address;
import com.ecommerce.project.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {
}
