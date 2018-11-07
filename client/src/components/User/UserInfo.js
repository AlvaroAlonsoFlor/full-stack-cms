import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Request from '../../helpers/Request'
import { Container } from 'bloomer/lib/layout/Container';
import { Title } from 'bloomer/lib/elements/Title';
import { Button } from 'bloomer/lib/elements/Button';

class UserInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectNow: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleFormEdit = this.handleFormEdit.bind(this);
    }


    handleDelete() {
        let userDeleteUrl = '/users/' + this.props.user.id
        const request = new Request()
        request.delete(userDeleteUrl)
            .then(() => this.setState({ redirectNow: true }))
    }

    handleRedirect() {
        if (this.state.redirectNow) {
            return <Redirect to='/' />
        }
    }

    handleFormEdit() {
        return <Redirect to={'/users/' + this.props.user.id}/>
    }

    render() {
        let userEditUrl = '/users/' + this.props.user.id + '/edit';
        return (
            <div className="user-info">
                <Container>
                    <Title className="user-name" isSize={1}>Welcome {this.props.user.name}</Title>
                    <Button>
                        <Link to={{
                            pathname: userEditUrl,
                            state: {
                                user: this.props.user
                            }
                        }}>
                            Edit User
                </Link>
                    </Button>
                    <Button onClick={this.handleDelete}>Delete User</Button>
                    {this.handleRedirect()}
                    
                </Container>

            </div>
        );
    }

}



export default UserInfo