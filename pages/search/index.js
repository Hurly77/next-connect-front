import React from 'react';
import Results from '@/components/results';

export const SearchPage = (props) => {
	const btn = <button>Hello</button>;

	return (
		<>
			<Results user={props.user} button={btn} />
		</>
	);
};

export const getStaticProps = async () => {
	return {
		props: {
			user: {
				first_name: 'Jason',
				joined: 'today',
				photo_url: 'images/no-avatar.png',
			},
		},
	};
};

export default SearchPage;
