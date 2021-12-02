import styles from './avatar.module.scss';
import Image from 'next/image';

const Hero = ({ url = '/images/no-avatar.png', children }) => {
  return (
    <div className='overflow-hidden rounded-full avatar bg-base-300'>
      <Image src={url} width={130} height={130} />
      {children}
    </div>
  );
};

export default Hero;
