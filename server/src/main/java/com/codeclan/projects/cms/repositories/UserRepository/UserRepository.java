package com.codeclan.projects.cms.repositories.UserRepository;

import com.codeclan.projects.cms.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
