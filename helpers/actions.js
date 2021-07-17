export const signup = async (user) => {
	const res = await fetch(`api/registrations`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(user),
	});
	const data = await res.json();
	console.log(data);
};

export const fetchUsers = async () => {};

export const getUserById = async () => {};

export default signup;
