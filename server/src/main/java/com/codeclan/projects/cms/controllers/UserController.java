package com.codeclan.projects.cms.controllers;

import com.codeclan.projects.cms.models.Article;
import com.codeclan.projects.cms.models.User;
import com.codeclan.projects.cms.repositories.UserRepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping(value = "/{id}/articles")
    public List<Article> getUserArticlesSorted(@PathVariable Long id) {
        User user = new User();

        return userRepository.getUserArticlesSortedByDate(id);
    }
}
