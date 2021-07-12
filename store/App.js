import './App.css';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import SiteBar from './containers/SiteBar';
import { checkLoggedIn } from './redux/actions/authActions';
import { checkFriends } from './redux/actions/friendActions';
import { SearchPage } from '../pages/search/SearchPage';

const App = () => {
	const [loading, setLoading] = useState(true);

	toggleLoading = () => {
		setLoading(true);
	};

	useEffect(() => {
		checkLoggedIn(toggleLoading);
	}, []);

	if (loading)
		return (
			<h1>
				Loading..., Hosted on heroku could take up to 15secs
			</h1>
		);
	return (
		<div className={styles.App}>
			{props.loggedIn ? <SiteBar /> : null}
			<div id="main"></div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		loggedIn: state.auth.loggedIn,
		results: state.search.results,
		currentUser: state.auth.currentUser,
	};
};

export default connect(mapStateToProps, {
	checkLoggedIn,
	checkFriends,
})(App);
