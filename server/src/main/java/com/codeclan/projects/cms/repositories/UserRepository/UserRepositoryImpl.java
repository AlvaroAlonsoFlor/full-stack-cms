package com.codeclan.projects.cms.repositories.UserRepository;

import com.codeclan.projects.cms.models.Article;
import com.codeclan.projects.cms.models.User;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class UserRepositoryImpl implements  UserRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Override
    @Transactional
    public List<Article> getUserArticlesSortedByDate(Long id) {
        List<Article> articles = null;
        Session session = entityManager.unwrap(Session.class);

        try {
            Criteria cr = session.createCriteria(Article.class);
            cr.createAlias("user", "userAlias");
            cr.add(Restrictions.eq("userAlias.id", id));
            cr.addOrder(Order.desc("date"));
            articles = cr.list();

        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {

        }

        return articles;
    }
}
