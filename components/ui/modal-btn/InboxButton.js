import styles from '@/styles/layout.module.scss';
import { useState } from 'react';
import MessageModal from '@/ui/modals/MessageModal';
import Icon from '@/ui/icon';

const InboxButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<button
				className={styles.inboxButton}
				onClick={() => setIsOpen(true)}>
				<Icon name="mail" />
			</button>
			<MessageModal
				open={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</>
	);
};

export default InboxButton;
