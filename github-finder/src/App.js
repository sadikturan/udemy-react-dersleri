import Navbar from './components/Navbar';
import UserList from './components/UserList';

// xmlhttprequuest, jquery, axios, fetch 

import React, { Component } from 'react'

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       users: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-3">
          <UserList users={ this.state.users }/>
        </div>
    </div>
    )
  }
}

export default App