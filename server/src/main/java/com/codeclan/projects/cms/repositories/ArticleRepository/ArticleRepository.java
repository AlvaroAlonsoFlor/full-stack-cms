package com.codeclan.projects.cms.repositories.ArticleRepository;

import com.codeclan.projects.cms.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import projections.EmbedUser;
import java.util.List;


@RepositoryRestResource(excerptProjection = EmbedUser.class)
public interface ArticleRepository extends JpaRepository<Article, Long>, ArticleRepositoryCustom {
    List<Article> getArticlesByCategory(String tag);

}



