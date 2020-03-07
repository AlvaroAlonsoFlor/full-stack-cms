package com.codeclan.projects.cms.repositories.UserRepository;

import com.codeclan.projects.cms.models.Article;
import com.codeclan.projects.cms.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import projections.EmbedArticle;
import projections.EmbedUser;

import java.util.List;

@RepositoryRestResource(excerptProjection = EmbedArticle.class)
public interface UserRepository extends JpaRepository<User, Long>, UserRepositoryCustom {
    List<Article> getUserArticlesSortedByDate(Long userId);

}
