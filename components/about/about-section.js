import React from 'react';
import './about.css';
import { connect } from 'react-redux';
import { EditButton } from '../ui/ModalButtons/EditButton';

const About = ({ user }) => {
	return (
		<div className="about-wrapper">
			<h2 className="about-title">About</h2>
			<br />
			<div className="about-details">
				<span id="about-item-1"></span>{' '}
				<span id="about-item-2">{user.work}</span>
				<span id="about-item-3"></span>{' '}
				<span id="about-item-4">{user.education}</span>
				<span id="about-item-5"></span>{' '}
				<span id="about-item-6">{user.relationship}</span>
				<span id="about-item-7"></span>{' '}
				<span id="about-item-8">{user.lives}</span>
				<span id="about-item-9"></span>{' '}
				<span id="about-item-10">{user.from}</span>
				<span id="about-item-11"></span>{' '}
				<span id="about-item-12">{user.joined}</span>
				<br />
				<p>
					<span>{user.c_id}</span>
				</p>
			</div>
			<EditButton />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.auth.currentUser,
	};
};

export default connect(mapStateToProps)(About);
