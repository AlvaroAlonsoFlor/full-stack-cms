import React, { Component, Fragment } from 'react';
import UserNavBar from '../../components/User/UserNavBar';
import UserArticlesContainer from './UserArticlesContainer';
import UserInfo from '../../components/User/UserInfo';


export default class UserContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            idToRender: this.props.match.params.id,
            user: {},
            filteredArticles: null
        };

        this.handleTagFilter = this.handleTagFilter.bind(this);
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
        if (this.props.location.state) {
            this.setState({user: this.props.location.state.user.user})
            // optional ?
            // this.setState({filteredArticles: this.props.location.state.user.user.articles})
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

        console.log('filtered articles:', this.state.filteredArticles);

        return(
            
            <Fragment>
                <UserNavBar user={this.state.user} /> 
                <UserInfo user={this.state.user} />
                <UserArticlesContainer user={this.state.user} onFilter={this.handleTagFilter} /> 
            </Fragment>
        )
    }


}


