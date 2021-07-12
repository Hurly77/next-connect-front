import React from 'react';
import { useState } from 'react';
import MessageModal from '../Modals/MessageModal';

const InboxButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	const inbox = Inbox;
	return (
		<div className={syles.inboxButton}>
			<button
				className={styles.openInbox}
				onClick={() => setIsOpen(true)}>
				Inbox
			</button>
			<MessageModal
				open={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</div>
	);
};

export default InboxButton;
