import { createPortal } from 'react-dom';
import RegisterPopup from '@/ui/modals/register-popup';
import styles from '@/styles/pages/homePage.module.scss';

export const SignupModal = ({ open, close, children }) => {
	return open
		? createPortal(
				<>
					<div className={styles.overlayStyle}>
						<div className={styles.signupModal}>
							<button onClick={() => close()}>X</button>
							<RegisterPopup />
							{children}
						</div>
					</div>
				</>,
				document.getElementById('portal'),
		  )
		: null;
};

export default SignupModal;
