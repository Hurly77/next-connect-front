const apiUrl = 'http://localhost:3000';
export const signup = (user, history) => {
	debugger
	return (dispatch) => {
		fetch(`${apiUrl}/registrations`, {
			method      : 'POST',
			headers     : {'Content-Type': 'application/json'},
			credentials : 'include',
			body        : JSON.stringify({user: user}),
		})
			.then((res) => res.json())
			.then(
				(data) =>
					dispatch({
						type    : 'AUTH_SUCCESS',
						payload : {loggedIn: data.logged_in, currentUser: data.user},
					}),
				history.push('/profile'),
			);
	};
};

export const login = (user, history) => {
	return (dispatch) => {
		fetch(`${apiUrl}/sessions`, {
			method      : 'POST',
			headers     : {'Content-Type': 'application/json'},
			credentials : 'include',
			body        : JSON.stringify({user: user}),
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type    : 'AUTH_SUCCESS',
					payload : {loggedIn: data.logged_in, currentUser: data.user},
				});
				history.push('/feed');
			});
	};
};

export const checkLoggedIn = (callback) => {
	return (dispatch) => {
		fetch(`${apiUrl}/logged_in`, {
			credentials : 'include',
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type    : 'AUTH_SUCCESS',
					payload : {loggedIn: data.logged_in, currentUser: data.user},
				});
				callback();
			});
	};
};

export const logout = (history) => {
	return (dispatch) => {
		fetch(`${apiUrl}/logout`, {
			method      : 'DELETE',
			credentials : 'include',
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({type: 'LOGOUT'});
				history.push('/');
			});
	};
};

export default signup;
