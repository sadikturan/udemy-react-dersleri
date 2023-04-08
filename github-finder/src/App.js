import Navbar from './components/Navbar';
import UserList from './components/UserList';
import React from 'react'
import Search from './components/Search';
import Alert from './components/Alert';
import { useState } from 'react';

const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);  
  
  const searchUsers = (keyword) => {
    setLoading(true);

    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then(response => response.json())
        .then(data => {
          setUsers(data.items);
          setLoading(false);
        });
    }, 1000);
  }

  const clearResults = () => {
    setUsers([]);
  }

  const displayAlert = (msg, type) => {
    setError({ msg: msg, type: type });

    setTimeout(() => {
      setError(null);
    }, 3000);
  }

  return (
    <div>
      <Navbar />
      <Search 
          searchUsers={searchUsers} 
          clearResults={clearResults} 
          showClearButton={ users.length > 0 ? true:false }
          displayAlert = {displayAlert} />
      <Alert error={error} />
      <div className="container mt-3">
        <UserList users={ users } loading={loading}/>
      </div>
  </div>
  )
}

export default App