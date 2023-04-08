import React, { Component } from 'react'
import Loading from './Loading';
import User from './User';

export class UserList extends Component {
    render() {
        if(this.props.loading) {
            return <Loading/>;
        }
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