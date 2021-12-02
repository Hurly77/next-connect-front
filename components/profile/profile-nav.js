import { profileLinks } from '@/data/links';
import NavLink from '@/layout/navbar/nav-link';
import { useRouter } from 'next/router';
import styles from '@/styles/pages/profilePage.module.scss';

const ProfileNav = () => {
  const router = useRouter();

  const handleClick = (path) => {
    router.push(path);
  };

  return (
    <ul className='w-full tabs'>
      {profileLinks.map((link, idx) => {
        return (
          <div
            key={idx}
            className={`w-1/4 tab tab-lg tab-bordered ${
              link.location === router.pathname ? 'tab-active' : ''
            }`}
            onClick={() => handleClick(link.location)}>
            {link.name}
          </div>
        );
      })}
    </ul>
  );
};

export default ProfileNav;
