import React, {Component} from 'react';
import {login} from '../../Redux/actions/authActions';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SignupButton from './SignupButton';

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

	togglePopup = () => {
		return <div>hello</div>;
	};

	render() {
		return (
			<div className="login-card">
				<br />
				<form onSubmit={this.handleOnSubmit}>
					<input placeholder="email" name="email" type="text" value={this.state.email} onChange={this.handleOnChange} />
					<br />
					<input placeholder="password" type="password" name="password" value={this.state.password} onChange={this.handleOnChange} />
					<br />
					<button type="submit" className="login-btn">Login</button>
				</form>
				<br />
				<SignupButton />
			</div>
		);
	}
}

export default withRouter(connect(null, {login})(Login));
