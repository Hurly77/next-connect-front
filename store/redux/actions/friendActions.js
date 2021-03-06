const apiUrl = 'https://next-connect-back.herokuapp.com/api/v1';

export const request = (active_user, passive_user) => {
	return (dispatch) => {
		fetch(`${apiUrl}/friend_request`, {
			method  : 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers     : {'Content-Type': 'application/json'},
			redirect: 'follow',
			referrer: 'no-referrer',
			body    : JSON.stringify({
				active_user_id  : active_user,
				passive_user_id : passive_user,
				status          : 'PENDING',
			}),
		})
			.then((res) => res.json())
			.then((data) =>
				dispatch({
					type    : 'REQUEST',
					payload : {
						pendingFriends : data.pending_friends,
					},
				}),
			);
	};
};

export const accept_request = (passive_user, active_user) => {
	return (dispatch) => {
		fetch(`${apiUrl}/accept`, {
			method      : 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers     : {'Content-Type': 'application/json'},
			redirect: 'follow',
			referrer: 'no-referrer',
			credentials : 'include',
			body        : JSON.stringify({
				passive_user_id : passive_user,
				active_user_id  : active_user,
				status          : 'FRIENDS',
			}),
		})
			.then((r) => r.json())
			.then((data) => {
				dispatch({
					type    : 'ACCEPTED',
					payload : {
						friends : data.friends,
					},
				});
			})
			.catch((error) => console.log(error));
	};
};

export const deny = (active_user, passive_user) => {
	return (dispatch) => {
		fetch(`${apiUrl}/users/${passive_user}`, {
			method      : 'DELETE',
			mode: 'cors',
			cache: 'no-cache',
			headers     : {'Content-Type': 'application/json'},
			redirect: 'follow',
			referrer: 'no-referrer',
			credentials : 'include',
			body        : JSON.stringify({
				active_user_id  : active_user,
				passive_user_id : passive_user,
				status          : 'DENIED',
			}),
		})
			.then((r) => r.json())
			.then((data) => {
				dispatch({
					type    : 'DENY',
					payload : {
						pendingFriends : data.pending_friends,
					},
				});
			});
	};
};

export const checkFriends = (id) => {
	return (dispatch) => {
		fetch(`${apiUrl}/users/${id}`, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers     : {'Content-Type': 'application/json'},
			redirect: 'follow',
			referrer: 'no-referrer',
			credentials: 'include'
		}).then((r) => r.json()).then((data) => {
			dispatch({
				type    : 'FRIENDS',
				payload : {
					friends        : data.friends,
					pendingFriends : data.pending_friends,
					requests       : data.requests,
				},
			});
		});
	};
};

export default request;
