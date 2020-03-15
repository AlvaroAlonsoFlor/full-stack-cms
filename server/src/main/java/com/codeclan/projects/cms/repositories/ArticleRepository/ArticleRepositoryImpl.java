package com.codeclan.projects.cms.repositories.ArticleRepository;

import com.codeclan.projects.cms.models.Article;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.EntityManager;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Order;
import javax.persistence.criteria.Root;
import javax.transaction.Transactional;
import java.util.List;

@Slf4j
public class ArticleRepositoryImpl implements ArticleRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Article> getArticlesByCategory(String tag) {
        List<Article> articles = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
            CriteriaQuery<Article> criteria = criteriaBuilder.createQuery(Article.class);
            Root<Article> rootArticle = criteria.from(Article.class);
            criteria.select(rootArticle);
            criteria.where(criteriaBuilder.equal(rootArticle.get("tag"), tag));

            articles = session.createQuery(criteria).getResultList();
        }
        catch(HibernateException e){
            log.error("Error getting articles by category", e);
        }
        finally {
            session.close();
        }
        return articles;
    }

    @Override
    @Transactional
    public List<Article> getAllArticlesSortedByDate() {
        List<Article> articles = null;
        Session session = entityManager.unwrap(Session.class);

        try {

            CriteriaBuilder criteriaBuilder = session.getCriteriaBuilder();
            CriteriaQuery<Article> criteria = criteriaBuilder.createQuery(Article.class);
            Root<Article> rootArticle = criteria.from(Article.class);
            criteriaBuilder.desc(rootArticle.get("date"));

            articles = session.createQuery(criteria).getResultList();

        } catch(HibernateException e) {
            log.error("Error getting articles sorted by date", e);
        } finally {
            session.close();
        }

        return articles;
    }
}
