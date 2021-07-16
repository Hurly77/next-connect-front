import { useState } from 'react';
import styles from '@/styles/pages/homePage.module.scss';

const RegisterPopup = () => {
	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		work: '',
		education: '',
		relationship: '',
		lives: '',
		from: '',
		email: '',
		password: '',
		password_confirmation: '',
	});

	const handleChange = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		fetch('api/users', {
			method: 'Post',
			body: JSON.stringify(user),
		});
	};

	return (
		<div>
			<h1>Sign Up</h1>
			<p>It's easy</p>
			<form onSubmit={handleSubmit}>
				<input
					className={styles.gridFirstName}
					type="text"
					name="first_name"
					placeholder="first name"
					value={user.first_name}
					onChange={handleChange}
				/>
				{console.log('hello12')}
				<input
					className={styles.lastName}
					type="text"
					name="last_name"
					placeholder="last name"
					value={user.last_name}
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
					name="password_confirmation"
					placeholder="Confirm Password"
					value={user.password_confirmation}
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
