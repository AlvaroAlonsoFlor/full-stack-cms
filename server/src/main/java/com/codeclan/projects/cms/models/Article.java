package com.codeclan.projects.cms.models;

import javax.persistence.*;
import java.sql.Clob;
import java.sql.Date;

public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "lead")
    private String lead;

    @Column(name = "body")
    private Clob body;

    @Column(name = "tag")
    private String tag;

    @Column(name = "date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public Article(String title, String lead, Clob body, String tag, Date date, User user) {
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

    public Clob getBody() {
        return body;
    }

    public void setBody(Clob body) {
        this.body = body;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
