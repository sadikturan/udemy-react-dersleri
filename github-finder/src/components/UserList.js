import React, { Component } from 'react'
import User from './User';

export class UserList extends Component {
    render() {
        return (
            <div>
                { this.props.users.map(user => (
                    <User user={user} key={user.id} /> 
                ))}
            </div>
        )
    }
}

export default UserList