import React from 'react'
import Loading from './Loading';
import User from './User';

const UserList = ({ loading, users }) => {
    if(loading) {
        return <Loading/>;
    }
    return (
        <div>
            { users.map(user => (
                <User user={user} key={user.id} /> 
            ))}
        </div>
    )
}

export default UserList