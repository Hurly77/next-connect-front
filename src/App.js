import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import RegisterPage from './registration/RegisterPage';
import HomePage from './Pages/HomePage'
import FeedPage from './Pages/FeedPage'
import Profile from './components/Profile/Profile';
import SiteBar from './containers/SiteBar'
import Inbox from './components/Inbox/Inbox'
import {checkLoggedIn} from './Redux/actions/authActions';

class App extends Component {
	state = {
		loading : true,
	};

	toggleLoading = () => {
		this.setState({loading: !this.state.loading});
	};

	componentDidMount() {
		this.props.checkLoggedIn(this.toggleLoading);
	}

	render() {
		if (this.state.loading) return <h1>Loading...</h1>;
		return (
			<div className="App">
				<Router>
					{this.props.loggedIn ? <SiteBar /> : null}
					<Switch>
						<Route
							path="/feed"
							render={(props) => {
								if (this.props.loggedIn) {
									return <FeedPage {...props} />;
								} else {
									return <Redirect to="/" />;
								}
							}}
						/>
						<Route exact path="/" component={HomePage} />
						<Route exact path="/signup" component={RegisterPage} />
						<Route exact path="/inbox" component={Inbox} />
						<Route exact path="/profile" component={Profile} />
					</Switch>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {loggedIn: state.auth.loggedIn};
};

export default connect(mapStateToProps, {checkLoggedIn})(App);
