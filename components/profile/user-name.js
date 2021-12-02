import React from 'react';
import styles from '@/styles/comps/profile.module.scss';

export const UserName = ({ user }) => {
  return (
    <h1 className='text-3xl'>
      {user.first_name} {user.last_name}
    </h1>
  );
};

export default UserName;
