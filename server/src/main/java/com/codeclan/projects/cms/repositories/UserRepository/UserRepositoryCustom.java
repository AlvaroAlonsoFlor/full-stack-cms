package com.codeclan.projects.cms.repositories.UserRepository;

import com.codeclan.projects.cms.models.Article;
import com.codeclan.projects.cms.models.User;

import java.util.List;

public interface UserRepositoryCustom {
    List<Article> getUserArticlesSortedByDate(Long userId);
}
