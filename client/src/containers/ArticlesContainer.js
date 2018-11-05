import React, {Component, Fragment} from 'react';
import ArticlePreview from '../components/Article/ArticlePreview';
import ArticleFilter from '../components/Article/ArticleFilter';
import HomeNavBar from '../components/Home/HomeNavBar';

export default class ArticlesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            filteredarticles: [],
            users: [],
            tags: []

        }
        this.handleNameFilters = this.handleNameFilters.bind(this); 
        this.handleTagFilters = this.handleTagFilters.bind(this); 
    }

    componentDidMount() {
        //fetch articles here
        fetch('/articles')
           .then(response => response.json())
           .then( (data) => this.setState({articles: data, filteredarticles: data}))
           .then(() => this.filterInfo());
    }

    filterUsers() {
        const users = [];
        this.state.articles.map((article) => {
            if (!users.includes(article.user.name)) {
                return users.push(article.user.name)}
            return null;   
            }) 
        this.setState({users: users})
        
    }

    filterTags() {
        const tags = [];
        this.state.filteredarticles.map((article) => {
            
            if (!tags.includes(article.tag)) {
                return tags.push(article.tag)}  
            return null;      
        })
        this.setState({tags: tags})
    }

    filterInfo() {
        this.filterTags();
        this.filterUsers();
    }

    handleNameFilters(name) {
        if (name === "all") {
            const allArticles = this.state.articles
            return this.setState({filteredarticles: allArticles})
        }
        const filterNameArticles = this.state.articles.filter((article) => {
            return article.user.name === name
        })
        this.setState({filteredarticles: filterNameArticles})
        
    }

    handleTagFilters(tag) {
        if (tag === "all") { 
            const allArticles = this.state.articles
            return this.setState({filteredarticles: allArticles})
        }
        const filterTagArticles = this.state.articles.filter((article) => {
            return article.tag === tag
        })
        this.setState({filteredarticles: filterTagArticles})
    }

    render() {
        return(
            <Fragment>
            <HomeNavBar/>
            <ArticleFilter userNames = {this.state.users} tags = {this.state.tags} onFilterName = {this.handleNameFilters} onFilterTag = {this.handleTagFilters}/>
                <h4>Filter here linking to /articles/filtered, which will fetch from the backend component or in this container</h4>
                <ArticlePreview articles = {this.state.filteredarticles}/>
            </Fragment>
        );
    }
}