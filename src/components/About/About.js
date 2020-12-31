import React from 'react';
import {connect} from 'react-redux';
import {EditButton} from '../ModalButtons/EditButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
	faBriefcase,
	faUniversity,
	faHandHoldingHeart,
	faMapMarkerAlt,
	faHome,
	faClock,
} from '@fortawesome/free-solid-svg-icons';

const About = ({user}) => {
	const work = <FontAwesomeIcon size="2x" icon={faBriefcase} />;
	const education = <FontAwesomeIcon size="2x" icon={faUniversity} />;
	const relationship = <FontAwesomeIcon size="2x" icon={faHandHoldingHeart} />;
	const lives = <FontAwesomeIcon size="2x" icon={faMapMarkerAlt} />;
	const from = <FontAwesomeIcon size="2x" icon={faHome} />;
	const joined = <FontAwesomeIcon size="2x" icon={faClock} />;

	console.log(user);
	return (
		<div className="about-wrapper">
			<h2 className="about-title">About</h2>
			<br />
			<div className="about-details">
				<span id="about-item-1">{work}</span> <span id="about-item-2">{user.work}</span>
				<span id="about-item-3">{education}</span> <span id="about-item-4">{user.education}</span>
				<span id="about-item-5">{relationship}</span> <span id="about-item-6">{user.relationship}</span>
				<span id="about-item-7">{lives}</span> <span id="about-item-8">{user.lives}</span>
				<span id="about-item-9">{from}</span> <span id="about-item-10">{user.from}</span>
				<span id="about-item-11">{joined}</span> <span id="about-item-12">{user.joined}</span>
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
		user : state.auth.currentUser,
	};
};

export default connect(mapStateToProps)(About);
