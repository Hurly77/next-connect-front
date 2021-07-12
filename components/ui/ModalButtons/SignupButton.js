import { useState } from 'react';
import SignupModal from '@/actions/authActions';
import RegisterPopup from '@/ui/Modals/register-popup';
import styles from '@/styles/pages/homePage.module.scss';

export const SignupButton = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className={styles.signupBtnContain}>
			<button
				className={styles.openPopup}
				onClick={() => setShowModal(true)}>
				Sign Up
			</button>
			<SignupModal
				open={showModal}
				setOpen={() => setShowModal(true)}
				selector="#portal"
				close={() => setShowModal(false)}>
				<RegisterPopup />
			</SignupModal>
		</div>
	);
};

export default SignupButton;
