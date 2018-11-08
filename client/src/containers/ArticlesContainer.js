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

    handleFiltersFromMenu(name, tag, views) {
        //recieve filter info back from menu
        const allArticles = this.state.articles
        //callback to make sure this.setState has finished first
        return this.setState({filteredarticles: allArticles}, () => {
            this.theFinalFilter(name, tag, views)
        })
    }

    theFinalFilter(name, tag, views) {
        const firstResults = this.handleNameFiltersFromMenu(name) 
        const secondResults= this.handleSecondFilterFromMenu(tag, firstResults)
        const filteredResults = this.handleThirdFilterFromMenu(views, secondResults)
        console.log(filteredResults)
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

    handleThirdFilterFromMenu(views, previousResults) {
        console.log('high')
        if (views === 'high') {
            return previousResults.sort(function(a, b){return b.views - a.views})
        }
        return previousResults.sort(function(a, b){return a.views - b.views})
    }

    render() {
        return(
            <Fragment>
                <HomeNavBar/>
                <ArticleFilter userNames = {this.state.users} tags = {this.state.tags} onFilter =           {this.handleFiltersFromMenu}/>
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        <ArticlePreview articles = {this.state.filteredarticles}/>
                    </div>    
            </Fragment>
        );
    }
}