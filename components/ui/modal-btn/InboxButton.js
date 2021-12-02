import styles from '@/styles/layout.module.scss';
import { useState } from 'react';
import MessageModal from '@/ui/modals/MessageModal';
import Icon from '@/ui/icon';

const InboxButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className={styles.inboxButton} onClick={() => setIsOpen(true)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='w-10 h-10'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
          />
        </svg>
      </button>
      <MessageModal open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default InboxButton;
