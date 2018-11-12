import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import UserContainer from './Users/UserContainer';
import ArticlesContainer from './ArticlesContainer';
import Article from '../components/Article/Article';
import NewUserForm from '../components/Home/NewUserForm';
import UserArticleForm from '../components/User/UserArticleForm';
import UserNewArticleForm from '../components/User/UserNewArticleForm';
import UserEditForm from '../components/User/UserEditForm';


export default class Main extends Component {

    render() {

        return(
            <Router>
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/users/:id' component={UserContainer} />
                <Route exact path='/articles' component={ArticlesContainer} />
                <Route exact path ='/articles/:id' component= {Article} />
                <Route exact path='/users/create/new' component={NewUserForm} />
                <Route exact path='/users/:id/articles/edit/:id' component={UserArticleForm} />
                <Route exact path='/users/:id/articles/new' component={UserNewArticleForm} />
                <Route exact path='/users/:id/edit' component={UserEditForm} />
            </div>
            </Router>
        );
    }


}