import { useState } from 'react';
import SignupModal from '@/ui/modals/SignupModal';
import styles from '@/styles/pages/homePage.module.scss';

export const SignupButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button
				className={styles.openPopup}
				onClick={() => setIsOpen(true)}>
				Sign Up
			</button>
			<SignupModal
				open={isOpen}
				close={() => setIsOpen(false)}
			/>
		</>
	);
};

export default SignupButton;
