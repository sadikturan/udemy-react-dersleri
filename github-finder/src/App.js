import Navbar from './components/Navbar';
import UserList from './components/UserList';
import React, { Component } from 'react'
import Search from './components/Search';
import Alert from './components/Alert';

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      loading: false,
      users: [],
      error: null
    }
  }

  searchUsers = (keyword) => {

    this.setState({ loading: true });

    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then(response => response.json())
        .then(data => this.setState({ users: data.items, loading: false }));
    }, 1000);
  }

  clearResults = () => {
    this.setState({ users: [] });
  }

  displayAlert = (msg, type) => {
    this.setState({ 
        error: { msg: msg, type: type } 
    });

    setTimeout(() => {
      this.setState({ error: null });
    }, 3000);
  }

  render() {
    return (
      <div>
        <Navbar />
        <Search 
            searchUsers={this.searchUsers} 
            clearResults={this.clearResults} 
            showClearButton={ this.state.users.length > 0 ? true:false }
            displayAlert = {this.displayAlert} />
        <Alert error={this.state.error} />
        <div className="container mt-3">
          <UserList users={ this.state.users } loading={this.state.loading}/>
        </div>
    </div>
    )
  }
}

export default App