import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import UserContainer from './UserContainer';
import ArticlesContainer from './ArticlesContainer';

export default class Main extends Component {

    render() {

        return(
            <Router>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/user/:id' component={UserContainer} />
                <Route path='/articles' component={ArticlesContainer} />
                <Route path ='article/:id' component= {Article} />
            </div>
            </Router>
        );
    }


}