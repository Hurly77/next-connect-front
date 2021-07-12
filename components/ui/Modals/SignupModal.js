import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const SignupModal = ({
	open,
	selector,
	setOpen,
	children,
}) => {
	const [isDoc, setIsDoc] = useState(false);
	setOpen;

	useEffect(() => {
		setIsDoc(true);
		setOpen(false);
		return () => setOpen(true);
	}, [selector]);

	if (open) {
		const portal = document.querySelector(selector);

		return createPortal(children, portal);
	} else {
		return null;
	}
};

export default SignupModal;
