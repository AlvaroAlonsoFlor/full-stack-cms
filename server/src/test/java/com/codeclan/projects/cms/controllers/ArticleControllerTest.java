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

    @Test
    public void getArticlesByCategoryShouldReturnArticleList() throws Exception {
        when(repository.getArticlesByCategory("bananas")).thenReturn(articles);

        mockMvc.perform(get("/articles/tag/bananas")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(0)));
    }

    @Test
    public void getAllArticlesSortedShouldReturnSortedArticles() throws Exception {
        when(repository.getAllArticlesSortedByDate()).thenReturn(articles);

        mockMvc.perform(get("/articles/sorted")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(0)));
    }


}
