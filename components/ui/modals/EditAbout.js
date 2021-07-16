import { useState } from 'react';
import styles from '@/styles/comps/about.module.scss';

const EditAbout = (props) => {
	const [about, setAbout] = useState({
		work: '',
		education: '',
		relationship: '',
		lives: '',
		from: '',
	});

	const handleChange = (e) => {
		setAbout({
			...about,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(about);
	};

	return (
		<form
			className={styles.editAboutModal}
			onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				name="work"
				value={about.work}
				id={styles.editAbout1}
				type="text"
				placeholder="what work do you do"
			/>
			<input
				onChange={handleChange}
				name="education"
				value={about.education}
				id={styles.editAbout2}
				type="text"
				placeholder="where did you go to school education"
			/>
			<input
				onChange={handleChange}
				name="relationship"
				value={about.relationship}
				id={styles.editAbout3}
				type="text"
				placeholder="are you in a relationship"
			/>
			<input
				onChange={handleChange}
				name="lives"
				value={about.lives}
				id={styles.editAbout4}
				type="text"
				placeholder="where do you live"
			/>
			<input
				onChange={handleChange}
				name="from"
				value={about.from}
				id={styles.editAbout5}
				type="text"
				placeholder="where are you from"
			/>
			<button type="submit">Save</button>
		</form>
	);
};

const mapaboutToProps = (about) => {
	return {
		currentUser: about.auth.currentUser,
	};
};

export default EditAbout;
