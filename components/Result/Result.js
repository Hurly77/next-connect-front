import React from 'react';
import './result.css'

const Result = ({user, button}) => {
	return (
		<div key={user.id} className="search-card">
			{user.first_name}
			<p>
				<span>Joined</span>
				{user.joined}
			</p>
        {button}
			<img src={user.photo_url} alt="1" className="search-avatar" />
		</div>
	);
};

export default Result;
