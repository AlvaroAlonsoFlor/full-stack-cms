package com.codeclan.projects.cms.models;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.sql.Clob;
import java.sql.Date;
import java.util.Calendar;

@Entity
@Table(name = "articles")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "lead")
    private String lead;

    @Column(name = "body")
    @Lob
    @Type(type = "org.hibernate.type.TextType")
    private String body;

    @Column(name = "tag")
    private String tag;

    @Column(name = "date")
    private Calendar date;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Article(String title, String lead, String body, String tag, Calendar date, User user) {
        this.title = title;
        this.lead = lead;
        this.body = body;
        this.tag = tag;
        this.date = date;
        this.user = user;
    }

    public Article() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getLead() {
        return lead;
    }

    public void setLead(String lead) {
        this.lead = lead;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public Calendar getDate() {
        return date;
    }

    public void setDate(Calendar date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
