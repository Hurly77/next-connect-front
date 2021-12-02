import Link from 'next/link';
import InboxButton from '@/ui/modal-btn/InboxButton';

const NavMap = () => {
  return (
    <ul className='flex w-1/3 navbar-center justify-evenly'>
      <Link href='/feed' passHref>
        <a className=''>
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
              d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
            />
          </svg>
        </a>
      </Link>
      <Link href='profile' passHref>
        <a>
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
              d='M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
            />
          </svg>
        </a>
      </Link>
      <li>
        <InboxButton />
      </li>
    </ul>
  );
};

export default NavMap;
