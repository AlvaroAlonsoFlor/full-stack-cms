import React, {Component, Fragment} from 'react';
import ArticlePreview from '../components/Article/ArticlePreview';
import ArticleFilter from '../components/Article/ArticleFilter';
import HomeNavBar from '../components/Home/HomeNavBar';
import { Section } from 'bloomer/lib/layout/Section';
import { Tile } from 'bloomer/lib/grid/Tile';
import { Container } from 'bloomer/lib/layout/Container';
import { isFullWidth } from 'bloomer/lib/bulma';

export default class ArticlesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            filteredarticles: [],
            users: [],
            tags: []

        }
        this.handleFiltersFromMenu = this.handleFiltersFromMenu.bind(this); 
       
    }

    componentDidMount() {
        //fetch articles here
        fetch('/articles/sorted')
           .then(response => response.json())
           .then( (data) => this.setState({articles: data, filteredarticles: data}))
           .then(() => this.filterInfoToSendForSelectMenu());
    }

    filterUsersForSelectMenu() {
        const users = [];
        this.state.articles.map((article) => {
            if (!users.includes(article.user.name)) {
                return users.push(article.user.name)}
            return null;   
            }) 
        this.setState({users: users})
        
    }

    filterTagsForSelectMenu() {
        const tags = [];
        this.state.filteredarticles.map((article) => {
            
            if (!tags.includes(article.tag)) {
                return tags.push(article.tag)}  
            return null;      
        })
        this.setState({tags: tags})
    }

    filterInfoToSendForSelectMenu() {
        //filter info to label select menu
        this.filterTagsForSelectMenu();
        this.filterUsersForSelectMenu();
    }

    handleFiltersFromMenu(name, tag) {
        //recieve filter info back from menu
        const allArticles = this.state.articles
        //callback to make sure this.setState has finished first
        return this.setState({filteredarticles: allArticles}, () => {
            this.theFinalFilter(name, tag)
        })
    }

    theFinalFilter(name, tag) {
        const firstResults = this.handleNameFiltersFromMenu(name) 
        const filteredResults= this.handleSecondFilterFromMenu(tag, firstResults)
        this.setState({filteredarticles: filteredResults})
    }


    handleNameFiltersFromMenu(name) {
        if (name === "all") {
            return this.state.articles;
        }
        const previousResults = this.state.filteredarticles.filter((article) => {        
            return article.user.name === name
        })
     return previousResults;
    }

    handleSecondFilterFromMenu(tag, previousResults) {
        if (tag === "all") {
            return previousResults;
        }
        const filteredArticles = previousResults.filter((article) => {
            return article.tag === tag
        })
       return filteredArticles;
    }

    render() {
        return(
            <Fragment>
                <HomeNavBar/>
                <ArticleFilter userNames = {this.state.users} tags = {this.state.tags} onFilter =           {this.handleFiltersFromMenu}/>
                <Section>
                    <Container isFullWidth={true} >
                        <ArticlePreview articles = {this.state.filteredarticles}/>
                    </Container>  
                </Section>
            </Fragment>
        );
    }
}