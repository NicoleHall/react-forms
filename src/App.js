import React, { Component } from 'react';
import UserForm from './components/UserForm';
import './App.css';


const User = ({user}) => {(
  <li>
    {user.username} - {user.email}
    { user.isAdmin ? '(admin)' : '' }
  </li>
)}

class App extends Component {

  state = {
    users: [ {username: 'angelica', email: 'angelica@example.com', isAdmin: true} ]
  }

  addUser = user => {
    this.setState(prevState => (
      {
        users: prevState.users.concat(user)
      }
    ))
  }

  render () {
    const userElements = this.state.users.map( (user, i) => {(
      <User key={i} user={ user } />
    )} )

    return(
      <div>
        <h1>Users</h1>
        { userElements }
        <hr />

        <h3>Add A User</h3>
        <UserForm onUserAdded={ this.addUser }/>
      </div>
    );
  }
}

export default App;
