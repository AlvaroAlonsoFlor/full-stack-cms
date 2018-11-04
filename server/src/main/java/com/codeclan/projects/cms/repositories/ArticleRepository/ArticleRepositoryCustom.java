package com.codeclan.projects.cms.repositories.ArticleRepository;

import com.codeclan.projects.cms.models.Article;

import javax.swing.text.html.HTML;
import java.util.List;

public interface ArticleRepositoryCustom {
    List<Article> getArticlesByCategory(String tag);


}
