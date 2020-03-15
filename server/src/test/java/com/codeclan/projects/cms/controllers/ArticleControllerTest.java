package com.codeclan.projects.cms.controllers;

import com.codeclan.projects.cms.models.Article;
import com.codeclan.projects.cms.models.User;
import com.codeclan.projects.cms.models.enums.UserType;
import com.codeclan.projects.cms.repositories.ArticleRepository.ArticleRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

import static org.mockito.Mockito.when;


@WebMvcTest(ArticleController.class)
public class ArticleControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ArticleRepository repository;

    private List<Article> articles = new ArrayList<>();

    @BeforeEach
    public void init() {
        this.articles = createTestArticleList();
    }

    @Test
    public void getArticlesByCategoryShouldReturnArticleList() throws Exception {
        when(repository.getArticlesByCategory("bananas")).thenReturn(articles);

        mockMvc.perform(get("/articles/tag/bananas")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)));
    }

    @Test
    public void getAllArticlesSortedShouldReturnSortedArticles() throws Exception {
        when(repository.getAllArticlesSortedByDate()).thenReturn(articles);

        mockMvc.perform(get("/articles/sorted")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)));
    }

    private List<Article> createTestArticleList () {
        User user1 = new User("Testy McFace", "secret", UserType.EDITOR);
        Calendar date1 = Calendar.getInstance();
        date1.set(2018,12,10);
        Article article1 = new Article ("title", "header", "body", "bananas", date1, user1);
        article1.setViews(1);


        ArrayList<Article> articles = new ArrayList<>();
        articles.add(article1);

        return articles;

    }

}
