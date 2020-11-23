const apiUrl = 'http://localhost:3000/api/v1';

export const createPost = (post) => {
	fetch(`${apiUrl}/posts`, {
		method      : 'POST',
		headers     : {'Content-Type': 'application/json'},
		credentials : 'include',
		body        : JSON.stringify({post: post}),
	});
};

export const fetchPosts = () => {
	return (dispatch) => {
		fetch(`${apiUrl}/posts`).then((res) => res.json()).then(
			(data) => {
				dispatch({
					type    : 'POSTS',
					payload : {posts: data},
				});
			}
		);
	};
};
