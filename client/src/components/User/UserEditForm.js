import React, {Component} from 'react';
import Request from '../../helpers/Request';
import { Redirect } from 'react-router-dom';

export default class UserEditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.location.state.user.name,
            password: this.props.location.state.user.password,
            redirectNow: false
        }
    }

    render() {
        console.log(this.state.name)
        return (
            <h1>YOLO</h1>
        )
    }
}