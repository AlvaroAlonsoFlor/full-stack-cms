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
        console.log(filterName);
        if (filterName === 'all') {
            console.log('this.state.user.articles', this.state.user.articles);
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
            return this.setState({user: this.props.location.state.user.user})
        }
        else {
        let url = '/users/' + this.state.idToRender + '?projection=embedArticle';
        fetch(url)
            .then(request => request.json())
            .then((data) => {this.setState({user: data})})
        }
        
    }

    render() {

        return(
            
            <Fragment>
                <UserNavBar user={this.state.user} /> 
                <UserInfo user={this.state.user} />
                <UserArticlesContainer user={this.state.user} onFilter={this.handleTagFilter} /> 
            </Fragment>
        )
    }


}


