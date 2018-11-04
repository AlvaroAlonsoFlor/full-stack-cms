import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import UserContainer from './UserContainer';

export default class Main extends Component {

    render() {

        return(
            <Router>
            <div>
                <Route exact path='/' component={Home} />
                <Route path='/user/:id' component={UserContainer} />
                <h2>Here route for ArticlesContainer</h2>
            </div>
            </Router>
        );
    }


}