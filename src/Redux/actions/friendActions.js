const apiUrl = 'http://localhost:3000/api/v1';

export const request = (active_user, passive_user) => {
	return (dispatch) => {
		fetch('http://localhost:3000/api/v1/friendships', {
			method  : 'POST',
			headers : {'Content-Type': 'application/json'},
			body    : JSON.stringify({
				active_user_id  : active_user.id,
				passive_user_id : passive_user.id,
			}),
		})
			.then((res) => res.json())
			.then((data) =>
				dispatch({
					type    : 'FREINDS',
					payload : {
						friends        : data.friends,
						pendingFriends : data.pending_friends,
						requests			 : data.requests
					},
				}),
			);
	};
};

export const accept_request = (passive_user, active_user) => {
	return (dispatch) => {
		fetch(`${apiUrl}`, {
			method      : 'PATCH',
			headers     : {'Content-Type': 'application/json'},
			credentials : 'include',
			body        : JSON.stringify({
				passive_user_id : passive_user.id,
				active_user_id  : active_user.id,
				status          : 'ACCEPTED',
			}),
		})
			.then((r) => r.json())
			.then((data) => {
				dispatch({
					type    : 'FRIENDS',
					payload : {
						friends        : data.friends,
						pendingFriends : data.pending_friends,
						requests			 : data.requests
					},
				});
			})
			.catch((error) => console.log(error));
	};
};

export const deny = (active_user, passive_user) => {
	return (dispatch) => {
		fetch(`${apiUrl}/friendships/${passive_user.id}`, {
			method      : 'DELETE',
			headers     : {'Content-Type': 'application/json'},
			credentials : 'include',
			body        : JSON.stringify({
				active_user_id  : active_user.id,
				passive_user_id : passive_user.id,
				status          : 'DENIED',
			}),
		})
			.then((r) => r.json())
			.then((data) => {
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
