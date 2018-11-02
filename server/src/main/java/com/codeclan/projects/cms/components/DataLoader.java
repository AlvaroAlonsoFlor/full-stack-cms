package com.codeclan.projects.cms.components;

import com.codeclan.projects.cms.models.Article;
import com.codeclan.projects.cms.models.User;
import com.codeclan.projects.cms.models.enums.UserType;
import com.codeclan.projects.cms.repositories.ArticleRepository.ArticleRepository;
import com.codeclan.projects.cms.repositories.UserRepository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ArticleRepository articleRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {

        User user1 = new User("John", "Donuts", UserType.EDITOR);

    }
}
