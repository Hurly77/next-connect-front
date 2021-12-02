import { useState } from 'react';
import Avatar from '../ui/media/avatar';
import styles from '@/styles/comps/post.module.scss';

const AddComment = (props) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    e.preventDefault;
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit: from comment-card.js');
  };

  return (
    <div className='w-full py-3 pl-3 pr-5 '>
      <div className='flex items-center w-auto'>
        <Avatar size='sm' />
        <form onSubmit={handleSubmit} className='w-full '>
          <input
            id={props.postId}
            type='text'
            className='w-full m-1 input input-sm'
            placeholder='comment'
            value={text}
            onChange={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default AddComment;
