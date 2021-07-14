import { createPortal } from 'react-dom';
import styles from '@/styles/layout.module.scss';
import Inbox from '@/inbox/index';

const BUTTON_STYLE = {
	backgroundColor: 'transparent',
	paddingBottom: '50px',
	border: 'none',
	width: '15px',
	height: '15px',
};

export const MessageModal = ({
	open,
	children,
	onClose,
}) => {
	return open
		? createPortal(
				<>
					<div className={styles.inboxModal}>
						<button
							style={BUTTON_STYLE}
							onClick={() => onClose()}>
							↓
						</button>
						<h3>notifications</h3>
						<Inbox />
						{children}
					</div>
				</>,
				document.getElementById('portal'),
		  )
		: null;
};

export default MessageModal;
