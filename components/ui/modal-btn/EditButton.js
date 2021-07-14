import React from 'react';
import { useState, useRef, useEffect } from 'react';
import EditModal from '../modals/EditModal';

const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
		const listener = (event) => {
			if (
				!ref.current ||
				ref.current.contains(event.target)
			) {
				return;
			}
			handler(event);
		};

		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);
};

export const EditButton = () => {
	const myRef = useRef();
	const [isOpen, setIsOpen] = useState(false);
	useOnClickOutside(myRef, () => setIsOpen(false));
	return (
		<div className="edit-button">
			{isOpen ? (
				<EditModal
					myRef={myRef}
					open={isOpen}
					onClose={() => setIsOpen(false)}
				/>
			) : (
				<button
					className="open-edit-btn"
					onClick={() => setIsOpen(true)}>
					Edit
				</button>
			)}
		</div>
	);
};

export default EditButton;
