const apiUrl = 'http://localhost:3000/api/v1';

export const request = (active_user, passive_user) => {
	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/friendships', {
			method  : 'POST',
			headers : {'Content-Type': 'application/json'},
			body    : JSON.stringify({
				active_user_id  : active_user,
				passive_user_id : passive_user,
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
		fetch(`${apiUrl}/friendships`, {
			method      : 'POST',
			headers     : {'Content-Type': 'application/json'},
			credentials : 'include',
			body        : JSON.stringify({
				passive_user_id :passive_user,
				active_user_id  : active_user,
				status          : 'ACCEPTED',
			}),
		})
			.then((r) => r.json())
			.then((data) => {
				dispatch({
					type    : 'ACCEPTED',
					payload : {
						friends        : data.friends,
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
			headers     : {'Content-Type': 'application/json'},
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
		fetch(`http://localhost:3000/api/v1/users/${id}`).then((r) => r.json()).then((data) => {
			dispatch({
				type    : 'FRIENDS',
				payload : {
					friends        : data.friends,
					pendingFriends : data.pending_friends,
					requests			 : data.requests
				},
			});
		});
	};
};

export default request;
