package com.codeclan.projects.cms.controllers;

import com.codeclan.projects.cms.models.Article;
import com.codeclan.projects.cms.repositories.ArticleRepository.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/articles")
public class ArticleController {

    @Autowired
    ArticleRepository articleRepository;

    @GetMapping(value = "/tag/{tag}")
    public List<Article> getArticlesByCategory(@PathVariable String tag){
        return articleRepository.getArticlesByCategory(tag);
    }

    @GetMapping(value = "/sorted")
    public List<Article> getAllArticlesSorted() {
        return articleRepository.getAllArticlesSortedByDate();
    }

}
