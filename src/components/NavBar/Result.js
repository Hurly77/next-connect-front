import React from 'react';

const Result = ({user, button}) => {
	return (
		<div key={user.id} className="search-card">
			{user.first_name}
			<p>
				<span>Joined</span>
				{user.joined}
			</p>
        {button}
			<img src={user.avatar} alt="1" className="search-avatar" />
		</div>
	);
};

export default Result;
