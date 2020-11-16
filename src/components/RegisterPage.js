import React, {Component} from 'react';

class RegisterPage extends Component {
	constructor() {
		super();
		this.state = {
			user : {
				first_name            : '',
				last_name             : '',
				email                 : '',
				password              : '',
				password_confirmation : '',
			},
		};
	}

	handleChange = (event) => {
		const {name, value} = event.target;
		this.setState({
			user : {
				...this.state.user,
				[name] : value,
			},
		}, () => console.log(this.state.user));
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.user.password === this.state.user.password_confirmation) {
      this.props.register(this.state.user);
      this.setState({
        user : {
          first_name            : '',
          last_name             : '',
          email                 : '',
          password              : '',
          password_confirmation : '',
        }
      })
		} else {
			console.log('error');
		}
	}

	render() {
		console.log(this.props)
		return (
			<div className="container">
				<form onSubmit={(event) => this.handleSubmit(event)}>
          <label htmlFor="first_name">First Name</label>
					<div className="form-group">
            <input  className="form-control"
            type="text" 
            name="first_name" 
            placeholder="first name" 
            value={this.state.user.first_name} 
            onChange={(event) => this.handleChange(event)} />
					</div>

          <label htmlFor="last_name">Last Name</label>
					<div className="form-group">
            <input className="form-control" 
            type="text" 
            name="last_name" 
           placeholder="last name" 
            value={this.state.user.last_name} 
           onChange={(event) => this.handleChange(event)} />
					</div>

          <label htmlFor="email">Email Address</label>
					<div className="form-group">
            <input className="form-control"
            type="text" 
            name="email"
            placeholder="your_name@example.com" 
            value={this.state.user.email} 
            onChange={(event) => this.handleChange(event)} />
					</div>

          <label htmlFor="password">Password</label>
					<div className="form-group">
            <input className="form-control" 
            type="password" 
            autoComplete="password"
            name="password" 
            placeholder="Password" 
            value={this.state.user.password} 
            onChange={(event) => this.handleChange(event)} required />
					</div>

          <label htmlFor="password_confirmation">Confirm Password</label>
					<div className="form-group">
            <input className="form-control"
              autoComplete="password"
							type="password"
							name="password_confirmation"
							placeholder="Password Confirmation"
							value={this.state.user.password_confirmation}
							onChange={(event) => this.handleChange(event)}
							required
						/>
					</div>
					<button className="btn btn-primary" type="submit">
						Sign Up
					</button>
				</form>
			</div>
		);
	}
}

export default RegisterPage