import { useState } from 'react';

const EditAbout = (props) => {
	const [currentUser, setCurrentUser] = useState({
		currentUser: props.currentUser ? props.currentUser : {},
	});

	handleChange = (e) => {
		setState({
			...currentUser,
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		props.updateUser(currentUser);
		props.onClose();
	};

	return (
		<form
			className={styles.editAboutModal}
			onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				name="work"
				value={state.work}
				id="edit-about-1"
				type="text"
				placeholder="what work do you do"
			/>
			<input
				onChange={handleChange}
				name="education"
				value={state.education}
				id="edit-about-2"
				type="text"
				placeholder="where did you go to school education"
			/>
			<input
				onChange={handleChange}
				name="relationship"
				value={state.relationship}
				id="edit-about-3"
				type="text"
				placeholder="are you in a relationship"
			/>
			<input
				onChange={handleChange}
				name="lives"
				value={state.lives}
				id="edit-about-4"
				type="text"
				placeholder="where do you live"
			/>
			<input
				onChange={handleChange}
				name="from"
				value={state.from}
				id="edit-about-5"
				type="text"
				placeholder="where are you from"
			/>
			<button type="submit">Save</button>
		</form>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.auth.currentUser,
	};
};

export default EditAbout;
