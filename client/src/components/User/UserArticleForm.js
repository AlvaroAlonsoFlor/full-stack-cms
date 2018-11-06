import React, {Component} from 'react';

export default class UserArticleForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: this.props.location.state.article.article.title, // do we pass the props?
            lead: this.props.location.state.article.article.lead,
            body: this.props.location.state.article.article.body

        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleLeadChange = this.handleLeadChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        
    }

    handleTitleChange(event) {
        this.setState({title: event.target.value})
    }

    handleLeadChange(event) {
        this.setState({lead: event.target.value})
    }

    handleBodyChange(event) {
        console.log('change in body', event.target.value);
        this.setState({body: event.target.value})
    }

    render() {


        //we need to pass same name, and date, check if we update, patch request should handle it
        //remember onSubmit on form

        return(
            <div>
                <form className='edit-article-form'>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
                    <label>Lead</label>
                    <input type="text" name="lead" value={this.state.lead} onChange={this.handleLeadChange}/>
                    <label>Body</label>
                    <textarea type="text" name="body" value={this.state.body} onChange={this.handleBodyChange}/>
                    
                    <button type="submit">Edit article</button>
                
                </form>
            </div>
        );
    }
}