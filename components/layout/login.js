import { useState, useRef, useEffect } from 'react';
import login from '@/actions/authActions';
import { connect } from 'react-redux';
import SignupButton from '../ui/ModalButtons/SignupButton';
import styles from '@/styles/pages/homePage.module.scss';

const Login = ({ login }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleOnSubmit = (e) => {
		preventDefault();
		login(state, props.history);
	};

	return (
		<div className={styles.loginCard}>
			<br />
			<form onSubmit={handleOnSubmit}>
				<input
					placeholder="email"
					name="email"
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<br />
				<input
					placeholder="password"
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<br />
				<button type="submit" className={styles.loginBtn}>
					Login
				</button>
			</form>
			<br />
			<SignupButton />
		</div>
	);
};

export default Login;
