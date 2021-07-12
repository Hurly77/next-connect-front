import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import EditAbout from './EditAbout';

export const editModal = ({
	open,
	children,
	onClose,
	myRef,
}) => {
	const [isDoc, setIsDoc] = useState(false);

	useEffect(() => {
		setIsDoc(true);
	});

	if (!open && isDoc) return null;
	return createPortal(
		<>
			<div ref={myRef} className={editModal}>
				<button
					className={styles.editModalBtn}
					onClick={() => onClose()}>
					X
				</button>
				<EditAbout open={open} onClose={onClose} />
				{children}
			</div>
		</>,
		document.getElementById('portal'),
	);
};

export default editModal;
