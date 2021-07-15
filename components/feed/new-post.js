import { useState } from 'react';
import Icon from '@/ui/icon';
import styles from '@/styles/pages/feedPage.module.scss';

const NewPost = (props) => {
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className={styles.newPost}>
			<h4>Whats on Your Mind?</h4>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="how are you feeling"
					onChange={handleChange}
					value={text}
				/>
				<label htmlFor="files">
					<Icon name="image" />
				</label>
				<input
					id="files"
					type="file"
					accept="image/*"
					multiple={true}
					hidden
				/>
			</form>
		</div>
	);
};

export default NewPost;
