const apiUrl = 'https://next-connect-back.herokuapp.com';

const query = (query, history) => {
	return (dispatch) => {
		fetch(`${apiUrl}/api/v1/users?query=${query}`, {
			mode: 'cors',
			cache: 'no-cache',
			headers     : {'Content-Type': 'application/json'},
			redirect: 'follow',
			referrer: 'no-referrer',
		}).then((r) => r.json()).then((data) => {
			dispatch({
				type    : 'SEARCH_BY_NAME',
				payload : {results: data.tree},
			});
			history.push('/results');
		});
	};
};

export default query;
