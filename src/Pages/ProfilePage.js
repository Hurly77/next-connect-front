import React from 'react';
import '../styles/profilePage.css'
import ProfileHead from '../containers/ProfileHead';
import {Link, useLocation, Switch, Route, useRouteMatch} from 'react-router-dom';
import AboutContainer from '../containers/AboutContainer'
import Posted from '../containers/Posted'
import FriendsContainer from '../containers/FriendsContainer';

const NavLink = ({to, className, activeClassName, inactiveClassName, ...rest}) => {
	let location = useLocation();
	let isActive = location.pathname === to;

	let allClassNames = className + (isActive ? `-${activeClassName}` : `-${inactiveClassName}`);

	return <Link className={allClassNames} to={to} {...rest} />;
};

const ProfilePage = () => {
	let {path, url} = useRouteMatch();
	return (
		<>
			<div className="profile-page">
				<ProfileHead />
				<div className="profile-tabs">
					<NavLink to="/profile" className="tab-link" inactiveClassName="tab-inactive" activeClassName="tab-active">
						About
					</NavLink>

					<NavLink to={`${url}/friends`} className="tab-link" inactiveClassName="tab-inactive" activeClassName="tab-active">
						Friends
					</NavLink>

					<NavLink to={`${url}/posts`} className="tab-link" inactiveClassName="tab-inactive" activeClassName="tab-active">
						Posts
					</NavLink>
				</div>
			</div>
			<div>
				<Switch>
          <Route exact path={`${path}`} component={AboutContainer} />
					<Route path={`${path}/friends`} component={FriendsContainer} />
					<Route path={`${path}/posts`} component={Posted} />
				</Switch>
			</div>
		</>
	);
};

export default ProfilePage;
