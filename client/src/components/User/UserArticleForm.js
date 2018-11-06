import React, {Component} from 'react';

export default class UserArticleForm extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props.location.state);
        const user = this.props.location.state.user.user;
        const article = this.props.location.state.article.article;

        console.log('user', user);
        console.log('article', article);

        //we need to pass same name, and date, check if we update, patch request should handle it
        //remember onSubmit on form

        return(
            <div>
                <form>
                    <label>Title</label>
                    <input type="text" name="title" value={article.title}/>
                    <label>Lead</label>
                    <input type="text" name="lead" value={article.lead}/>
                    <label>Body</label>
                    <input type="text" name="body" value={article.body}/>
                    
                    <button type="submit">Edit article</button>
                
                </form>
            </div>
        );
    }
}