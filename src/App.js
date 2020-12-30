import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import HomePage from './Pages/HomePage'
import FeedPage from './Pages/FeedPage'
import ProfilePage from './Pages/ProfilePage'
import SiteBar from './containers/SiteBar'
import {checkLoggedIn} from './Redux/actions/authActions';
import {checkFriends} from './Redux/actions/friendActions'
import {SearchPage} from './Pages/SearchPage'

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
				<div id="main">
					<Switch>
						<Route
							path="/feed"
							render={(props) => {
								if (this.props.loggedIn) {
									this.props.checkFriends(this.props.currentUser.id)
									return <FeedPage {...props} />;
								} else {
									return <Redirect to="/" />;
								}
							}}
						/>
						<Route exact path="/" component={HomePage} />
						<Route path="/profile" component={ProfilePage} />
						<Route path="/results" 
							render={(props) => {
								if(this.props.results.length !== 0){
									return <SearchPage {...props}/> 
								} else {
									return <Redirect to="/feed" />
								}
							}} />
					</Switch>
				</div>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loggedIn: state.auth.loggedIn,
		results: state.search.results,
		currentUser: state.auth.currentUser
	};
};

export default connect(mapStateToProps, {checkLoggedIn, checkFriends})(App);
