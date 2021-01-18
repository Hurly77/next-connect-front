const apiUrl = 'http://localhost:3000';
export const signup = (user, history) => {
	return (dispatch) => {
		fetch(`${apiUrl}/registrations`, {
			method      : 'POST',
			headers     : {'Content-Type': 'application/json'},
			credentials : 'include',
			body        : JSON.stringify({user: user}),
		})
		.then((res) => res.json())
		.then(
			(data) =>{
			dispatch({
				type    : 'AUTH_SUCCESS',
				payload : {loggedIn: data.logged_in, currentUser: data.user},
			}) 
			history.push(`/${data.user.c_id}`)
			}
			);
	};
};

export const updateUser = (user, history) => {
	return (dispatch) => {
		fetch(`${apiUrl}/api/v1/users/${user.id}`, {
			method      : 'PUT',
			headers     : {'Content-Type': 'application/json'},
			credentials : 'include',
			body        : JSON.stringify({user: user}),
		})
			.then((res) => res.json())
			.then(
				(data) =>
					dispatch({
						type    : 'UPDATE_USER',
						payload : {currentUser: data.user},
					}),
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
					payload : {
						loggedIn       : data.logged_in,
						currentUser    : data.user,
						friends        : data.friends,
						pendingFriends : data.pendingFriends,
					},
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

export const uploadAvatar = (user, data) => {
return (dispatch) => {	
	fetch(`${apiUrl}/api/v1/photos/${user.id}`, {
		method : 'PATCH',
		body   : data,
	})
		.then((r) => r.json())
		.then((stuff) => {
			dispatch({
				type: 'UPLOAD_AVATAR',
				payload: {currentUser: stuff}
			})
		})
		.catch((error) => {
			console.log(error);
		});}
};

export const uploadBanner = (user, data) => {
	return (dispatch) => {	
		fetch(`${apiUrl}/api/v1/photos/${user.id}`, {
			method : 'PATCH',
			body   : data,
		})
			.then((r) => r.json())
			.then((stuff) => {
				dispatch({
					type: 'UPLOAD_BANNER',
					payload: {currentUser: stuff}
				})
			})
			.catch((error) => {
				console.log(error);
			});}
	};

export const updateProps = (id) => {
	return (dispatch) => {
		fetch(`${apiUrl}/api/v1/photos/${id}`, {
			credentials : 'include',
		})
			.then((r) => r.json())
			.then((data) => {
				dispatch({
					type: "UPDATE_PROPS",
					payload: {currentUser: data}
				})
			})
			.catch((error) => {
				console.log(error);
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
