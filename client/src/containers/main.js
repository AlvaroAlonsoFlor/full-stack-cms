import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import UserContainer from './Users/UserContainer';
import ArticlesContainer from './ArticlesContainer';
import Article from '../components/Article/Article';
import NewUserForm from '../components/Home/NewUserForm';


export default class Main extends Component {

    render() {

        return(
            <Router>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/user/:id' component={UserContainer} />
                <Route exact path='/articles' component={ArticlesContainer} />
                <Route exact path ='/articles/:id' component= {Article} />
                <Route exact path='/users/create/new' component={NewUserForm} />

            </div>
            </Router>
        );
    }


}