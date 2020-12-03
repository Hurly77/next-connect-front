const apiUrl = 'http://localhost:3000';

const query = (query, history) => {
	return (dispatch) => {
		fetch(`${apiUrl}/api/v1/users?query=${query}`).then((r) => r.json()).then((data) => {
			dispatch({
				type    : 'SEARCH_BY_NAME',
				payload : {results: data.tree},
			});
			history.push('/results');
		});
	};
};

export default query;
