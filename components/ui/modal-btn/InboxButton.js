import styles from '@/styles/layout.module.scss';
import { useState } from 'react';
import MessageModal from '@/ui/modals/MessageModal';

const InboxButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button
				className={styles.inboxButton}
				onClick={() => setIsOpen(true)}>
				Inbox
			</button>
			<MessageModal
				open={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</>
	);
};

export default InboxButton;
