const apiUrl = 'http://localhost:3000/api/v1';

export const createPost = (post) => {
	return (dispatch) => {
		fetch(`${apiUrl}/posts`, {
			method      : 'POST',
			headers     : {'Content-Type': 'application/json'},
			credentials : 'include',
			body        : JSON.stringify({post: post}),
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

export const fetchPosts = (id) => {
	return (dispatch) => {
		fetch(`${apiUrl}/posts?id=${id}`).then((res) => res.json()).then((data) => {
			dispatch({
				type    : 'POSTS',
				payload : {posts: data},
			});
		});
	};
};
