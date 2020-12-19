import React from 'react';
import Result from './Result';
import {connect} from 'react-redux';

export const Results = ({users, props}) => {
	return users.map((user) => {
		return (
			<div key={user.id} className="search-card">
				{user.first_name}
				<p><span>Joined</span>{user.joined}</p>
				<Result user={user} />
				<img src={user.avatar} alt="1" className="search-avatar"></img>
			</div>
		);
	});
};

const mapStateToProps = (state) => {
	return {
		props : {
			results : state.search.results,
		},
	};
};

export default connect(mapStateToProps)(Results);
