import React, { Component } from 'react'
import User from './User';

export class UserList extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
         users: [
            {
                id: "19492591",
                name: "Sadık Turan",
                username: "sadikturan",
                avatar_url: "https://avatars.githubusercontent.com/u/19492591?v=4",
                github_url: "https://github.com/sadikturan",
                website: "https://sadikturan.com",
                followers: "4157"
            },
            {
                id: "1",
                name: "Ahmet Turan",
                username: "mojombo",
                avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                github_url: "https://github.com/sadikturan",
                website: "https://sadikturan.com",
                followers: "4157"
             },
            {
                id: "1",
                name: "Ahmet Turan",
                username: "mojombo",
                avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
                github_url: "https://github.com/sadikturan",
                website: "https://sadikturan.com",
                followers: "4157"
             },
             {
                id: "2",
                name: "Çınar Turan",
                username: "sadikturan",
                avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
                github_url: "https://github.com/sadikturan",
                website: "https://sadikturan.com",
                followers: "4157"
             }
         ]
      }
    }

    render() {
        return (
            <div>
                { this.state.users.map(user => (
                    <User user={user} key={user.id} /> 
                ))}
            </div>
        )
    }
}

export default UserList