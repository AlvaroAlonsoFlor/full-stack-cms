import React, {Component} from 'react';
import Request from '../../helpers/Request';
import {Redirect} from 'react-router-dom';
import { Section } from 'bloomer/lib/layout/Section';
import { Field } from 'bloomer/lib/elements/Form/Field/Field';
import { Label } from 'bloomer/lib/elements/Form/Label';
import { Input } from 'bloomer/lib/elements/Form/Input';
import { TextArea } from 'bloomer/lib/elements/Form/TextArea';
import { Button } from 'bloomer/lib/elements/Button';

export default class UserArticleForm extends Component {


    constructor(props) {
        super(props);
        this.state = {
            title: this.props.location.state.article.article.title,
            lead: this.props.location.state.article.article.lead,
            body: this.props.location.state.article.article.body,
            tag: this.props.location.state.article.article.tag,
            redirectNow: false

        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleLeadChange = this.handleLeadChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleTagChange = this.handleTagChange.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleTitleChange(event) {
        this.setState({title: event.target.value})
    }

    handleLeadChange(event) {
        this.setState({lead: event.target.value})
    }

    handleBodyChange(event) {
        this.setState({body: event.target.value})
    }

     handleTagChange(event) {
        this.setState({tag: event.target.value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const title = this.state.title.trim();
        const lead = this.state.lead.trim();
        const body = this.state.body.trim();
        const tag = this.state.tag.trim();
        if (!title || !lead || !body) {
            return
        }

        const id = this.props.location.state.article.article.id
        const request = new Request()
        request.patch(`/articles/${id}`,{
            "title": title,
            "lead": lead,
            "body": body,
            "tag": tag
        })
            .then(() => this.setState({redirectNow: true}))

    }

    handleRedirect() {

        const userId = this.props.location.state.user.user.id
        if (this.state.redirectNow) {

            return <Redirect to={`/users/${userId}`} />
        }

        return null
    }

    render() {

        return(
           
            <Section>
                <form className='edit-article-form' onSubmit={this.handleSubmit}>
                    <Field>
                        <Label>Title</Label>
                        <Input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
                    </Field>

                    <Field>
                        <Label>Lead</Label>
                        <Input type="text" name="lead" value={this.state.lead} onChange={this.handleLeadChange}/>
                    </Field>

                    <Field>
                        <Label>Tag</Label>
                        <Input style={{width: 200}} type="text" name="tag" value={this.state.tag} onChange={this.handleTagChange}/>
                        
                    </Field>

                    <Field>
                        <Label>Body</Label>
                        <TextArea rows='25' type="text" name="body" value={this.state.body} onChange={this.handleBodyChange}/>
                        
                    </Field>

                    <Button type='submit'>Edit Article</Button>
                
                    {this.handleRedirect()}
                </form>

            </Section>
        );
    }
}
