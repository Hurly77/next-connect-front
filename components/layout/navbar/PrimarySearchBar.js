import { useState } from 'react';
import styles from '@/styles/layout.module.scss';

const PrimarySearchBar = () => {
	const [query, setQuery] = useState('');

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form className={styles.search} onSubmit={handleSubmit}>
			<input
				type="search"
				name="search"
				onChange={handleChange}
				value={query}></input>
		</form>
	);
};

export default PrimarySearchBar;
