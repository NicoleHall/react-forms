import React, { Component } from 'react';

class UserForm extends Component {

  state = {}

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onUserAdded(this.state)
  }

  onChange = (e) => { this.setState({ [e.target.name]: e.target.value }) }

  render () {
    return (
      <form onSubmit={ this.onSubmit }>
        <p>
          <label>
            Username: <input type="text" onChange={ this.onChange } name="username" />
          </label>
        </p>
        <p>
          <label>
            Email: <input type="text" onChange={ this.onChange } name="email" />
          </label>
        </p>
        <p>
          <label>
            <input type="checkbox" onChange={ (e) => this.setState({[e.target.name]: e.target.checked}) }name="isAdmin" />
            Is Admin
          </label>
        </p>
        <p>
          <input type="submit" value="Create user" />
        </p>
      </form>
    )
  }

}

export default UserForm;
