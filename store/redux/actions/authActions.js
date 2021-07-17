export const signup = (user, history) => {
	fetch(`api/registrations`, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		headers: { 'Content-Type': 'application/json' },
		redirect: 'follow',
		referrer: 'no-referrer',
		credentials: 'include',
		body: JSON.stringify({ user: user }),
	})
		.then((res) => res.json())
		.then((data) => {});
};

export const updateUser = (user, history) => {
	fetch(`api/v1/users/${user.id}`, {
		method: 'PUT',
		mode: 'cors',
		cache: 'no-cache',
		headers: { 'Content-Type': 'application/json' },
		redirect: 'follow',
		referrer: 'no-referrer',
		credentials: 'include',
		body: JSON.stringify({ user: user }),
	})
		.then((res) => res.json())
		.then();
};

export const login = (user, history) => {
	fetch(`sessions`, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		headers: { 'Content-Type': 'application/json' },
		redirect: 'follow',
		referrer: 'no-referrer',
		body: JSON.stringify({ user: user }),
		credentials: 'include',
	})
		.then((res) => res.json())
		.then();
};

export const checkLoggedIn = (callback) => {
	fetch(`logged_in`, {
		method: 'GET',
		mode: 'cors',
		headers: { 'Content-Type': 'application/json' },
		cache: 'no-cache',
		redirect: 'follow',
		referrer: 'no-referrer',
		credentials: 'include',
	})
		.then((res) => res.json())
		.then();
};

export const uploadAvatar = (user, data) => {
	fetch(`api/v1/photos/${user.id}`, {
		method: 'PATCH',
		mode: 'cors',
		cache: 'no-cache',
		redirect: 'follow',
		referrer: 'no-referrer',
		body: data,
	})
		.then((r) => r.json())
		.then();
};

export const uploadBanner = (user, data) => {
	fetch(`api/v1/photos/${user.id}`, {
		method: 'PATCH',
		body: data,
	})
		.then((r) => r.json())
		.then();
};

export const updateProps = (id) => {
	fetch(`api/v1/photos/${id}`, {
		method: 'GET',
		mode: 'cors',
		cache: 'no-cache',
		headers: { 'Content-Type': 'application/json' },
		redirect: 'follow',
		referrer: 'no-referrer',
		credentials: 'include',
	})
		.then((r) => r.json())
		.then()
		.catch((error) => {
			console.log(error);
		});
};

export const logout = (history) => {
	fetch(`logout`, {
		method: 'DELETE',
		mode: 'cors',
		cache: 'no-cache',
		headers: { 'Content-Type': 'application/json' },
		redirect: 'follow',
		referrer: 'no-referrer',
		credentials: 'include',
	})
		.then((res) => res.json())
		.then((data) => {});
};

export default signup;
