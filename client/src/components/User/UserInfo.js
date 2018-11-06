import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Request from '../../helpers/Request'

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
                <h4 className="user-name">{this.props.user.name}</h4>
                <Link to={{
                        pathname: userEditUrl,
                        state: {
                            user: this.props.user
                        }
                    }}>
                    Edit User
                </Link>
                <button type="button" onClick={this.handleDelete}>Delete User</button>
                {this.handleRedirect()}
            </div>
        );
    }

}



export default UserInfo