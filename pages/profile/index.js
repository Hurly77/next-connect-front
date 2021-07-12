import React from 'react';
import ProfileHead from '../store/containers/ProfileHead';
import AboutContainer from '../containers/AboutContainer';
import Posts from '../components/Posts/Posts';
import FriendsContainer from '../containers/FriendsContainer';
import PhotosContainer from '../containers/PhotosContainer';

const ProfilePage = () => {
	return (
		<>
			<div className="profile-page">
				<ProfileHead />
				<div className="profile-tabs">
					<NavLink
						to={`${url}`}
						className="tab-link"
						inactiveClassName="tab-inactive"
						activeClassName="tab-active">
						About
					</NavLink>

					<NavLink
						to={`${url}/friends`}
						className="tab-link"
						inactiveClassName="tab-inactive"
						activeClassName="tab-active">
						Friends
					</NavLink>

					<NavLink
						to={`${url}/posts`}
						className="tab-link"
						inactiveClassName="tab-inactive"
						activeClassName="tab-active">
						Posts
					</NavLink>

					<NavLink
						to={`${url}/photos`}
						className="tab-link"
						inactiveClassName="tab-inactive"
						activeClassName="tab-active">
						Photos
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default ProfilePage;
