import UserName from '@/profile/user-name';
import UserHero from '@/profile/user-hero';
import Banner from '@/profile/banner';
import ProfileNav from '@/profile/profile-nav';
import styles from '@/styles/pages/profilePage.module.scss';
import EditButton from '@/ui/modal-btn/EditButton';

const ProfileHead = (props) => {
  return (
    <div className='mb-10 transition-all bg-primary'>
      <Banner />
      <div className='flex items-center px-10'>
        <UserHero />
        <div className='px-3'>
          <UserName user={props} />
          <EditButton />
        </div>
      </div>
      <ProfileNav />
    </div>
  );
};

export default ProfileHead;
