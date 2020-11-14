import React, {Component} from 'react';

export default class RegisterPage extends Component {
  constructor(){
    super()
    this.state = {
      user : {
        firstName : '',
        lastName  : '',
        email     : '',
        password  : '',
        password_confirmation: ''
      }
    };
  }
  
	handleChange(event) {
		const {name, value} = event.target;
		this.setState({
      user : {
        ...this.state.user,
				[name] : value
			}
		});
	}
  
	handleSubmit(event) {
    event.preventDefault();
    const user = this.state.user;
    debugger
    if (user.password === user.password_confirmation){
      this.props.register(user)
      this.setState({
        user : {
          firstName : '',
          lastName  : '',
          email     : '',
          password  : '',
          password_confirmation: ''
        }
      })
    } else {
      console.log("error")
    }
	}
  
	render() {
    return (
      <div className="container">
        <form onSubmit={event => this.handleSubmit(event)}>
				<div className="form-group">
					<input type="text" name="firstName" placeholder="first name" value={this.state.user.firstName} onChange={event => this.handleChange(event)} />
				</div>

				<div className="form-group">
					<input type="text" name="lastName" placeholder="last name" value={this.state.user.lastName} onChange={event => this.handleChange(event)} />
				</div>

				<div className="form-group">
					<input type="password" name="password" placeholder="Password" value={this.state.user.password} onChange={event => this.handleChange(event)} required />
				</div>

				<div className="form-group">
					<input
						type="password"
						name="password_confirmation"
						placeholder="Password Confirmation"
						value={this.state.user.password_confirmation}
						onChange={event => this.handleChange(event)}
						required
					/>
				</div>
				<button className="btn btn-primary" type="submit">Sign Up</button>
			</form>
      </div>
		);
	}
}
