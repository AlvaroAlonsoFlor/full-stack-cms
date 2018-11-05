import React, {Component, Fragment} from 'react';
import ArticlePreview from '../components/Article/ArticlePreview';

export default class ArticlesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        } 
    }

    componentDidMount() {
        //fetch articles here
        fetch('/articles')
           .then(response => response.json())
           .then( (data) => this.setState({articles: data})); 
    }

    render() {
        return(
            <Fragment>
                <h4>Filter here linking to /articles/filtered, which will fetch from the backend component or in this container</h4>
                <ArticlePreview articles = {this.state.articles}/>
            </Fragment>
        );
    }
}