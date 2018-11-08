import React, { Component, Fragment } from 'react';
import UserNavBar from '../../components/User/UserNavBar';
import UserArticlesContainer from './UserArticlesContainer';
import UserInfo from '../../components/User/UserInfo';
import Request from '../../helpers/Request';
import { Container } from 'bloomer/lib/layout/Container';


export default class UserContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idToRender: this.props.match.params.id,
            user: {},
            filteredArticles: null
        };

        this.handleTagFilter = this.handleTagFilter.bind(this);
        this.handleArticleDelete = this.handleArticleDelete.bind(this);
    }

    handleArticleDelete() {
        console.log('here handle delete');
        const request = new Request();
        request.get(`/users/${this.state.user.id}` + '?projection=embedArticle')
            .then((data) => {
                this.setState({user: data, filteredArticles: data.articles})      
            })
        

    }

    handleTagFilter(filterName) {
        if (filterName === 'all') {
            this.setState({filteredArticles: this.state.user.articles})
        } else {
            const filteredArticles = this.state.user.articles.filter((article) => {
                return article.tag === filterName
            })

            this.setState({filteredArticles: filteredArticles})
        } 

    }

    componentDidMount() {
        console.log('state in mount', this.props.location.state);
        if (this.props.location.state) {
            this.setState({user: this.props.location.state.user.user})
            // optional ?
            this.setState({filteredArticles: this.props.location.state.user.user.articles})
        }

        //loads if it doesn't have the info
        else {
        let url = '/users/' + this.state.idToRender + '?projection=embedArticle';
        fetch(url)
            .then(request => request.json())
            .then((data) => {
                this.setState({filteredArticles: data.articles})
                return this.setState({user: data})})
            
        }
        
    }

    render() {

        let articles;

        if (this.state.filteredArticles) {
            articles = this.state.filteredArticles;
        } else {
            articles = this.state.user.articles;
        }

        return(
            <Container>
                <UserNavBar user={this.state.user} />
                <UserInfo user={this.state.user} />
                <UserArticlesContainer onDelete={this.handleArticleDelete} user={this.state.user} articlesFiltered={articles} onFilter={this.handleTagFilter} /> 
            </Container>
        )
    }


}


