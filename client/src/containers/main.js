import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Main extends Component {

    render() {

        return(
            <div>
                <h2>Here route for Home/UserList</h2>
                <h2>Here route for UserContainer</h2>
                <h2>Here route for ArticlesContainer</h2>
            </div>
        );
    }


}