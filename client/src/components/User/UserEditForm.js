import React, { Component } from 'react';
import Request from '../../helpers/Request';
import { Redirect } from 'react-router-dom';
import { Section } from 'bloomer/lib/layout/Section';
import { Field } from 'bloomer/lib/elements/Form/Field/Field';
import { Label } from 'bloomer/lib/elements/Form/Label';
import { Input } from 'bloomer/lib/elements/Form/Input';
import { Button } from 'bloomer/lib/elements/Button';

export default class UserEditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.location.state.user.name,
            password: this.props.location.state.user.password,
            redirectNow: false
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.state.name
        const password = this.state.password
        const id = this.props.location.state.user.id
        const request = new Request()
        request.patch(`/users/${id}`, {
            "name": name,
            "password": password
        })
            .then(() => this.setState({ redirectNow: true }))
    }

    handleRedirect() {
        const userId = this.props.location.state.user.id
        if (this.state.redirectNow) {

            return <Redirect to={`/users/${userId}`} />
        }
        return null

    }


    render() {
        return (

            <Section>
                <form className='edit-article-form' onSubmit={this.handleSubmit}>
                    <Field>
                        <Label>Name</Label>
                        <Input style={{width: 200}} type="text" name="name" value={this.state.name} onChange={this.handleNameChange}/>
                    </Field>
                    <Field>
                        <Label>Password</Label>
                        <Input style={{width: 200}} type="text" name="password" value={this.state.password} onChange={this.handlePasswordChange}></Input>
                    </Field>

                    <Button type='submit'>Edit User</Button>
                    {this.handleRedirect()}

                </form>
            </Section>
        );
    }
}