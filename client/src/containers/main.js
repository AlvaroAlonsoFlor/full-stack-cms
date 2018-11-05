import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import UserContainer from './Users/UserContainer';
import ArticlesContainer from './ArticlesContainer';
import NewUserForm from '../components/Home/NewUserForm';

export default class Main extends Component {

    render() {

        return(
            <Router>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/users/:id' component={UserContainer} />
                <Route path='/articles' component={ArticlesContainer} />
                <Route path='/users/new' component={NewUserForm} />
            </div>
            </Router>
        );
    }


}