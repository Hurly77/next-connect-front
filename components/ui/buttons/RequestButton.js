export const RequestButton = ({ request, aU, pU }) => {
	return (
		<button onClick={() => request(aU, pU)}>
			add Friend
		</button>
	);
};

export default RequestButton;
