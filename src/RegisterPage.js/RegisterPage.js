import React, { Component } from 'react'

export default class RegisterPage extends Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    submitted: false
  }

  handlChange(event) {
    const {name, value} = event.target;
    const {user} = this.state
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    })
  }

  render() {
    const {user, submitted} = this.state
    return (
      <div>
        <form name="form" onSubmit={this.handleSubmit}>
          <input type="text" 
          name="first_name" 
          placeholder="first name" 
          value={user.firstName} 
          onChange={event => handlChange(event)} />
          
          <input type="text" 
          name="last_name" 
          placeholder="last name" 
          value={user.lastName}
          onChange={event => this.handleChange(event)}/>
          
          <input 
          type="text" 
          name="email" 
          placeholder="John.Doe@example.com" 
          value={this.state.email}
          onChange={event => this.handleChange(event)} />

          <input 
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={event => this.handleChange(event)}
           required/>

        <input 
          type="password"
          name="password_confirmation"
          placeholder="Password"
          value={this.state.password}
          onChange={event => this.handleChange(event)}
           required/>
          <button type="submit"></button>
        </form>
      </div>
    )
  }
}
