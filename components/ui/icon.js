const Icon = (props) => {
	const {
		name,
		target = '',
		link = null,
		children = null,
		styles = null,
	} = props;

	if (!name) {
		return (
			<a target={target} href={link}>
				{children}
			</a>
		);
	}

	if (!children) {
		return (
			<span
				aria-hidden
				style={styles}
				className={'material-icons'}>
				{name}
			</span>
		);
	}

	if (!link) {
		return (
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
				}}>
				<span
					aria-hidden
					style={styles}
					className={'material-icons'}>
					{name}
				</span>
				<p>{children}</p>
			</div>
		);
	}

	return (
		<a target="" href={link}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
				}}>
				<span
					aria-hidden
					style={styles}
					className={'material-icons'}>
					{name}
				</span>
				<p>{children}</p>
			</div>
		</a>
	);
};

export default Icon;
