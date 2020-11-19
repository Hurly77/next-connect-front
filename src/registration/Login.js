import React, {Component} from 'react';
import {login} from '../Redux/actions/authActions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Login extends Component {
	state = {
		email    : '',
		password : '',
	};

	handleOnChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleOnSubmit = (e) => {
		e.preventDefault();
		this.props.login(this.state, this.props.history);
	};

	render() {
		return (
			<div>
				<br />
				<form onSubmit={this.handleOnSubmit}>
					<label>Email</label>
					<input name="email" type="text" value={this.state.email} onChange={this.handleOnChange} />
					<br />
					<label>Password</label>
					<input type="password" name="password" value={this.state.password} onChange={this.handleOnChange} />
					<br />
					<button type="submit">Login</button>
				</form>
				<br />
				<Link to="/signup">Signup</Link>
			</div>
		);
	}
}

export default connect(null, {login})(Login);
