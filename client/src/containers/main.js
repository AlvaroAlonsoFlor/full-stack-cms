import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';

export default class Main extends Component {

    render() {

        return(
            <Router>
            <div>
                <Route exact path='/' component={Home} />
                <h2>Here route for UserContainer</h2>
                <h2>Here route for ArticlesContainer</h2>
            </div>
            </Router>
        );
    }


}