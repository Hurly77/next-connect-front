import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import RegisterPage from './components/RegisterPage'
import Login from './components/Login'
import Feed from './components/Feed'
import Profile from './components/Profile'
import NavBar from './components/NavBar';
import { checkLoggedIn } from './Redux/actions/authActions'

class App extends Component  {
	state = {
		loading: true
	};

	toggleLoading = () => {
		this.setState({ loading: !this.state.loading })
	}

	componentDidMount() {
		this.props.checkLoggedIn(this.toggleLoading);
	}

	render(){
		if (this.state.loading) return <h1>Loading...</h1>
		return (
			<div className="App">
				<Router>
					<NavBar />
				 	<Switch>
						 <Route
						  path="/" 
							render={(props) => {
								if (this.props.loggedIn) {
                  return <Profile {...props} />;
                } else {
                  return <Redirect to="/login" />;
                }
							}}
							/>
						<Route exact path="/login" component={Login} />
					 	<Route exact path="/signup" component={RegisterPage} />
				 	</Switch>
		 		</Router>		
			</div>
		 
		);
	}
}

const mapStateToProps = state => {
return {	loggedIn: state.auth.loggedIn,}
}

export default connect(mapStateToProps, {checkLoggedIn})(App)