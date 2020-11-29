import React from 'react';
import ProfileHead from '../containers/ProfileHead';
import {Link, useLocation, Switch, Route, useRouteMatch} from 'react-router-dom';
import {Me} from '../components/Profile/About'
import Friends from '../components/Profile/Friends'
import Posts from '../components/Profile/Posts'

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
          <Route exact path={`${path}`} component={Me} />
					<Route path={`${path}/friends`} component={Friends} />
					<Route path={`${path}/posts`} component={Posts} />
				</Switch>
			</div>
		</>
	);
};

export default ProfilePage;
