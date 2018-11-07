import React from 'react';
import Request from '../../helpers/Request';
import {Redirect} from 'react-router-dom';
import { Section } from 'bloomer/lib/layout/Section';
import { Field } from 'bloomer/lib/elements/Form/Field/Field';
import { Label } from 'bloomer/lib/elements/Form/Label';
import { Input } from 'bloomer/lib/elements/Form/Input';

class NewUserForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectNow: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRedirect = this.handleRedirect.bind(this);
    }
   

    handleSubmit(event) {
        event.preventDefault();
        const user = {
            "name": event.target.name.value,
            "password": event.target.name.value,
            "type": "EDITOR"

        }
        
        const request = new Request()
        this.handleRedirect();
        request.post('/users', user)
            .then(() => this.setState({redirectNow: true}))
        
        
    }

    handleRedirect() {
        if (this.state.redirectNow) {
            return <Redirect to='/'/>
        }
    }

    render() {
        
         return(
            // <div>
            //     <h3>Introduce your user name and password to create the user</h3>

            //     <form onSubmit={this.handleSubmit}>
            //         <input type="text" placeholder="Name" name="name"/>
            //         <input type="text" placeholder="Password" name="password"/>
                    
            //         <button type="submit">Create</button>
            //         {this.handleRedirect()}
                
            //     </form>
            // </div>
            <Section>
                <form onSubmit={this.handleSubmit}>
                    <Field>
                        <Label>Name</Label>
                        <Input style={{width: 200}} type="text" placeholder="Name" name="name"></Input>
                    </Field>
                </form>

            </Section>
        );
    }
   

     
}

export default NewUserForm;