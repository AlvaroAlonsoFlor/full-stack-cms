package com.codeclan.projects.cms.repositories.ArticleRepository;

import com.codeclan.projects.cms.models.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepository extends JpaRepository<Article, Long> {
}
