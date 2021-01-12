const apiUrl = 'http://localhost:3000/api/v1';

export const createPost = (post) => {
	return (dispatch) => {
		fetch(`${apiUrl}/posts`, {
			method      : 'POST',
			headers     : {'Content-Type': 'application/json'},
			credentials : 'include',
			body        : JSON.stringify({post: post})
		})
			.then((res) => res.json())
			.then((data) => {
				dispatch({
					type    : 'NEW_POST',
					payload : {
						posts : data,
					},
				});
			});
	};
};

export const postImages = (data) => {
		fetch(`${apiUrl}/posts`, {
			method      : 'POST',
			credentials : 'include',
			body        : data
		})
	};


export const fetchUserPosts = (id) => {
	return (dispatch) => {
		fetch(`${apiUrl}/posts?id=${id}`).then((res) => res.json()).then((data) => {
			dispatch({
				type    : 'USER_POSTS',
				payload : {posts: data},
			});
		});
	};
};

export const fetchFriendsPosts = (id) => {
	return (dispatch) => {
		fetch(`${apiUrl}/users/${id}/friends`).then((res) => res.json()).then((data) => {
			dispatch({
				type    : 'FRIENDS_POSTS',
				payload : {posts: data},
			});
		});
	};
};

export const fetchAllPosts = (id) => {
	return (dispatch) => {
		fetch(`${apiUrl}/users/${id}/all_posts`).then((res) => res.json()).then((data) => {
			dispatch({
				type    : 'ALL_POSTS',
				payload : {posts: data},
			});
		});
	};
};

