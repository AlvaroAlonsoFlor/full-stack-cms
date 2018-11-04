import React, {Component, Fragment} from 'react';

export default class ArticlesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        } 
    }

    componentDidMount() {
        //fetch articles here
    }

    render() {
        return(
            <Fragment>
                <h4>Filter here linking to /articles/filtered, which will fetch from the backend component or in this container</h4>
                <h4>Render here all Articles(Preview). On Click will go to Article, route /articles/:id</h4> 
            </Fragment>
        );
    }
}