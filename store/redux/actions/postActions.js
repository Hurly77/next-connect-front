const apiUrl = 'https://next-connect-back.herokuapp.com/api/v1';

export const createPost = (post, photos) => {
	return (dispatch) => {
		fetch(`${apiUrl}/posts`, {
			method      : 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers     : {'Content-Type': 'application/json'},
			redirect: 'follow',
			referrer: 'no-referrer',
			credentials : 'include',
			body        : JSON.stringify({post}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (!!photos.values().next().value) {
					photos.append('user_id', data.post.user_id);
					photos.append('post_id', data.post.id);
					fetch(`${apiUrl}/post_photos`, {
						method      : 'POST',
						mode: 'cors',
						cache: 'no-cache',
						redirect: 'follow',
						referrer: 'no-referrer',
						credentials : 'include',
						body        : photos,
					})
						.then((r) => r.json())
						.then((data) => {
							dispatch({
								type    : 'ALL_POSTS',
								payload : data,
							});
						});
				}else{
					console.log(photos)
					dispatch({
						type : 'NEW_POST',
						payload: {post: data.post, photos: [], comments: []}
					})
				}
			});
	};
};

// export const createPost = (post, photos) => {
// 		fetch(`${apiUrl}/posts`, {
// 			method      : 'POST',
// 			credentials : 'include',
// 			body        : post
// 		}).then(r.console.log(r))
// };

export const fetchUserPosts = (id) => {
	return (dispatch) => {
		fetch(`${apiUrl}/posts?id=${id}`, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers     : {'Content-Type': 'application/json'},
			redirect: 'follow',
			referrer: 'no-referrer',
		}).then((res) => res.json()).then((data) => {
			dispatch({
				type    : 'USER_POSTS',
				payload : {posts: data},
			});
		});
	};
};

export const fetchFriendsPosts = (id) => {
	return (dispatch) => {
		fetch(`${apiUrl}/users/${id}/friends`, {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers     : {'Content-Type': 'application/json'},
			redirect: 'follow',
			referrer: 'no-referrer',
		}).then((res) => res.json()).then((data) => {
			dispatch({
				type    : 'FRIENDS_POSTS',
				payload : {posts: data},
			});
		});
	};
};

export const fetchAllPosts = (id) => {
	return (dispatch) => {
		fetch(`${apiUrl}/users/${id}/all_posts`,{
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			headers     : {'Content-Type': 'application/json'},
			redirect: 'follow',
			referrer: 'no-referrer',
		}).then((res) => res.json()).then((data) => {
			dispatch({
				type    : 'ALL_POSTS',
				payload : {posts: data},
			});
		});
	};
};

export const fetchPhotos = (id) => {
	return (dispatch) => {
		fetch(`${apiUrl}/post_photos/${id}`,{
			mode: 'cors',
			cache: 'no-cache',
			headers     : {'Content-Type': 'application/json'},
			redirect: 'follow',
			referrer: 'no-referrer',
		}).then((res) => res.json()).then((data) => {
			console.log(data)
			dispatch({
				type    : 'USER_PHOTOS',
				payload : {photos: data},
			});
		});
	};
};

export const likePost = (user_id, post_id) => {
	return (dispatch) => {
		fetch(`${apiUrl}`, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers     : {'Content-Type': 'application/json'},
			redirect: 'follow',
			referrer: 'no-referrer',
			credentials: 'include',
			body: JSON.stringify({
				like: {
				user_id: user_id,
				post_id: post_id
			}
				})
		})
		.then(r => r.json())
		.then(
			(data) => {
				dispatch({
					type: 'Like_POST',
					payload: data
				})
			}
		)
	}
}