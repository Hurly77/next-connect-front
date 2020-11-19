import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import RegisterPage from './registration/RegisterPage';
import Login from './registration/Login';
import Home from './components/Home'
import Feed from './containers/Feed'
import Profile from './components/Profile';
import NavBar from './components/NavBar';
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
					<NavBar />
					<Switch>
						<Route
							path="/profile"
							render={(props) => {
								if (this.props.loggedIn) {
									return <Profile {...props} />;
								} else {
									return <Redirect to="/login" />;
								}
							}}
						/>
						<Route exact path="/" component={Home} />
						<Route exact path="/signup" component={RegisterPage} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/feed" component={Feed} />
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
