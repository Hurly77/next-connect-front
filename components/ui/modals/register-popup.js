import { useState } from 'react';
import { signup } from '@/helpers/actions';
import styles from '@/styles/pages/homePage.module.scss';

const RegisterPopup = () => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		passwordConfirmation: '',
	});

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user.password === user.passwordConfirmation) {
			return signup(user);
		} else {
			alert('password need to match');
			return;
		}
	};

	return (
		<div>
			<h1>Sign Up</h1>
			<p>It's easy</p>
			<form onSubmit={handleSubmit}>
				<input
					className={styles.gridFirstName}
					type="text"
					name="firstName"
					placeholder="First Name"
					value={user.firstName}
					onChange={handleChange}
				/>
				<input
					className={styles.lastName}
					type="text"
					name="lastName"
					placeholder="last name"
					value={user.lastName}
					onChange={handleChange}
				/>

				<input
					className={styles.email}
					type="text"
					name="email"
					placeholder="your_name@example.com"
					value={user.email}
					onChange={handleChange}
				/>

				<input
					className={styles.password}
					type="password"
					autoComplete="password"
					name="password"
					placeholder="Password"
					value={user.password}
					onChange={handleChange}
					required
				/>

				<input
					className={styles.passwordConfirm}
					autoComplete="password"
					type="password"
					name="passwordConfirmation"
					placeholder="Confirm Password"
					value={user.passwordConfirmation}
					onChange={handleChange}
					required
				/>

				<div className={styles.disclaimer}>
					<p>
						By clicking Sign Up, you agree to our Terms,
						Data Policy and Cookies Policy. You may receive
						SMS Notifications from us and can opt out any
						time.
					</p>
				</div>
				<button
					className={styles.btnSubmitSignup}
					type="submit">
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default RegisterPopup;
