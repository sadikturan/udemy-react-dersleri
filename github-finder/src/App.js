import Navbar from './components/Navbar';
import UserList from './components/UserList';
import React from 'react'
import Search from './components/Search';
import Alert from './components/Alert';
import { useState,useReducer } from 'react';
import UsersReducer from './reducers/usersReducer';

const App = () => {

  const initialState = {
    users: [],
    loading: false
  }
  
  const [state, dispatch] = useReducer(UsersReducer, initialState);
  const [error, setError] = useState(null);  
  
  const searchUsers = (keyword) => {
    setLoading();

    setTimeout(() => {
      fetch("https://api.github.com/search/users?q=" + keyword)
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: "SEARCH_USERS",
            users: data.items
          });
        });
    }, 1000);
  }

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  }
  const clearResults = () => {
    dispatch({ type: "CLEAR_USERS" });
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
          showClearButton={ state.users.length > 0 ? true:false }
          displayAlert = {displayAlert} />
      <Alert error={error} />
      <div className="container mt-3">
        <UserList users={ state.users } loading={state.loading}/>
      </div>
  </div>
  )
}

export default App