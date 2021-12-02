import { useState } from 'react';
import Icon from '@/ui/icon';
import Avatar from '@/ui/media/avatar';

const NewPost = (props) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className='w-full h-40 p-3 mb-10 card bg-primary'>
      <h4>Whats on Your Mind?</h4>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center form-control'>
        <div className='flex items-center w-full'>
          <Avatar />
          <input
            type='text'
            className='w-full m-3 input input-secondary'
            placeholder='how are you feeling'
            onChange={handleChange}
            value={text}
          />
        </div>

        <div className='input-group'>
          <label htmlFor='files'>
            <Icon name='image' />
          </label>
          <input
            id='files'
            type='file'
            accept='image/*'
            multiple={true}
            hidden
          />
        </div>
      </form>
    </div>
  );
};

export default NewPost;
