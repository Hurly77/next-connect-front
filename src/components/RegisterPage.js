import React, {Component} from 'react';
import signup from '../Redux/actions/authActions'
import { connect } from 'react-redux';

class RegisterPage extends Component {
	state = {
		first_name            : '',
		last_name             : '',
		email                 : '',
		password              : '',
		password_confirmation : '',
	}
	
	
	handleChange = e => {
		this.setState({
			[e.target.name] : e.target.value,
		});
	}
	
	handleSubmit = e => {
		e.preventDefault();
		if (this.state.password === this.state.password_confirmation) {
			this.props.signup(this.state, this.props.history);
		}
	}
	
	render() {
		return (
			<div className="container">
				<form onSubmit={ this.handleSubmit }>
          <label htmlFor="first_name">First Name</label>
					<div className="form-group">
            <input  className="form-control"
            type="text" 
            name="first_name" 
            placeholder="first name" 
            value={this.state.first_name} 
            onChange={ this.handleChange } />
					</div>

          <label htmlFor="last_name">Last Name</label>
					<div className="form-group">
            <input className="form-control" 
            type="text" 
            name="last_name" 
           placeholder="last name" 
            value={this.state.last_name} 
           onChange={ this.handleChange } />
					</div>

          <label htmlFor="email">Email Address</label>
					<div className="form-group">
            <input className="form-control"
            type="text" 
            name="email"
            placeholder="your_name@example.com" 
            value={this.state.email} 
            onChange={ this.handleChange } />
					</div>

          <label htmlFor="password">Password</label>
					<div className="form-group">
            <input className="form-control" 
            type="password" 
            autoComplete="password"
            name="password" 
            placeholder="Password" 
            value={this.state.password} 
            onChange={ this.handleChange } required />
					</div>

          <label htmlFor="password_confirmation">Confirm Password</label>
					<div className="form-group">
            <input className="form-control"
              autoComplete="password"
							type="password"
							name="password_confirmation"
							placeholder="Password Confirmation"
							value={this.state.password_confirmation}
							onChange={ this.handleChange }
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

export default connect(null, {signup})(RegisterPage)