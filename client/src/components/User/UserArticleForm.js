import React, {Component} from 'react';

export default class UserArticleForm extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleLeadChange = this.handleLeadChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        
    }

    handleTitleChange() {

    }

    handleLeadChange() {

    }

    handleBodyChange() {

    }

    render() {
        const user = this.props.location.state.user.user;
        const article = this.props.location.state.article.article;


        //we need to pass same name, and date, check if we update, patch request should handle it
        //remember onSubmit on form

        return(
            <div>
                <form className='edit-article-form'>
                    <label>Title</label>
                    <input type="text" name="title" value={article.title} onChange={this.handleTitleChange}/>
                    <label>Lead</label>
                    <input type="text" name="lead" value={article.lead} onChange={this.handleLeadChange}/>
                    <label>Body</label>
                    <textarea type="text" name="body" value={article.body} onChange={this.handleBodyChange}/>
                    
                    <button type="submit">Edit article</button>
                
                </form>
            </div>
        );
    }
}