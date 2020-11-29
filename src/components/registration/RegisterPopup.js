import React, {Component} from 'react';
import signup from '../../Redux/actions/authActions'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom'

class RegisterPopup extends Component {
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
			<>
			<h1>Sign Up</h1>
			<p>It's easy</p>
				<form onSubmit={ this.handleSubmit }>
            <input className="grid first-name"
            type="text" 
            name="first_name" 
            placeholder="first name" 
            value={this.state.first_name} 
            onChange={ this.handleChange } />

            <input className="last-name"
            type="text" 
            name="last_name" 
           placeholder="last name" 
            value={this.state.last_name} 
           onChange={ this.handleChange } />

            <input className="email"
            type="text" 
            name="email"
            placeholder="your_name@example.com" 
            value={this.state.email} 
            onChange={ this.handleChange } />

            <input className="password"
            type="password" 
            autoComplete="password"
            name="password" 
            placeholder="Password" 
            value={this.state.password} 
            onChange={ this.handleChange } required />
			
            <input className="password-confirm"
              autoComplete="password"
							type="password"
							name="password_confirmation"
							placeholder="Confirm Password"
							value={this.state.password_confirmation}
							onChange={ this.handleChange }
							required
						/>
					<div className="disclaimer">
					<p>By clicking Sign Up, you agree to our Terms, Data Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
					</div>
					<button className="btn-submit-signup" type="submit">
						Sign Up
					</button>
				</form>
			</>
		);
	}
}

export default withRouter(connect(null, {signup})(RegisterPopup))