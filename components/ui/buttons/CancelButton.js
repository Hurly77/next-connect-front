const CancelButton = ({ cancel, aU, pU }) => {
	return (
		<button onClick={() => cancel(aU, pU)}>
			cancel Request
		</button>
	);
};
export default CancelButton;
