import { useState } from 'react';
import { login } from '../../Redux/actions/authActions';
import { connect } from 'react-redux';
import SignupButton from '../ModalButtons/SignupButton';

const Login = ({ login }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	handleOnSubmit = (e) => {
		preventDefault();
		login(state, props.history);
	};

	togglePopup = () => {
		return <div>hello</div>;
	};

	return (
		<div className="login-card">
			<br />
			<form onSubmit={handleOnSubmit}>
				<input
					placeholder="email"
					name="email"
					type="text"
					value={state.email}
					onChange={handleOnChange}
				/>
				<br />
				<input
					placeholder="password"
					type="password"
					name="password"
					value={state.password}
					onChange={handleOnChange}
				/>
				<br />
				<button type="submit" className="login-btn">
					Login
				</button>
			</form>
			<br />
			<SignupButton />
		</div>
	);
};

export default Login;
