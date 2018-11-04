package com.codeclan.projects.cms.repositories.ArticleRepository;

import com.codeclan.projects.cms.models.Article;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class ArticleRepositoryImpl implements ArticleRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Article> getArticlesByCategory(String tag) {
        List<Article> articles = null;
        Session session = entityManager.unwrap(Session.class);

        try{
            Criteria cr = session.createCriteria(Article.class);
            cr.add(Restrictions.eq("tag", tag));
            articles = cr.list();
        }
        catch(HibernateException e){
            e.printStackTrace();
        }
        finally {
            session.close();
        }
        return articles;
    }
}
