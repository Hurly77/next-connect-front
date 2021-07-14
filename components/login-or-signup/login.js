import { useState, useRef, useEffect } from 'react';
import SignupButton from '../ui/modal-btn/SignupButton';
import styles from '@/styles/pages/homePage.module.scss';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleOnSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className={styles.loginCard}>
			<form onSubmit={handleOnSubmit}>
				<input
					placeholder="email"
					name="email"
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					placeholder="password"
					type="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit" className={styles.loginBtn}>
					Login
				</button>
			</form>
			<SignupButton />
		</div>
	);
};

export default Login;
