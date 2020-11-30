const apiUrl = 'http://localhost:3000';

const query = (query) => {
	return (dispatch) => {
		fetch(`${apiUrl}/api/v1/search?query=${query}`).then((r) => r.json()).then(
			(data) =>
				dispatch({
					type    : 'SEARCH_BY_NAME',
					payload : {results: data},
				})
		);
	};
};

export default query;
