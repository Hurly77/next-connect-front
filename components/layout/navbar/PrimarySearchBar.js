import { useState } from 'react';
import styles from '@/styles/layout.module.scss';
import Icon from '@/ui/icon';

const PrimarySearchBar = () => {
	const [query, setQuery] = useState('');

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className={styles.searchWrap}>
			<form
				className={styles.search}
				onSubmit={handleSubmit}>
				<Icon name="search" />
				<input
					type="search"
					name="search"
					onChange={handleChange}
					value={query}></input>
			</form>
		</div>
	);
};

export default PrimarySearchBar;
