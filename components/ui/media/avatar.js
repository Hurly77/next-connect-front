import styles from './avatar.module.scss';
import Image from 'next/image';

const Avatar = ({ url, size = 'md' }) => {
  const sizes = ['sm', 'md', 'lg'];
  let determineAvatarSize;
  switch (size) {
    case 'sm':
      determineAvatarSize = 'h-10 w-10';
      break;
    case 'md':
      determineAvatarSize = 'h-12 w-12';
      break;
    case 'lg':
      determineAvatarSize = 'h-14 w-14';
      break;
    default:
      determineAvatarSize = 'h-10 w-10';
      break;
  }

  const defaultAvatar = (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={`rounded-full ${determineAvatarSize} bg-base-100`}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
      />
    </svg>
  );

  return (
    <div className='avatar'>
      {url ? (
        <Image src={url} className='rounded-full' width={75} height={75} />
      ) : (
        defaultAvatar
      )}
    </div>
  );
};

export default Avatar;
