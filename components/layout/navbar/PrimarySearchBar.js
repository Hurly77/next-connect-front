import { useState } from 'react';
import Icon from '@/ui/icon';

const PrimarySearchBar = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className=''>
      <form className='form-control' onSubmit={handleSubmit}>
        <div class='relative'>
          <button class='absolute top-0 left-0 rounded-full btn btn-sm btn-primary'>
            <Icon name='search' />
          </button>
          <input
            type='text'
            placeholder='Search'
            class='pl-0 w-1/2 transition-all focus:pl-16 focus:w-96 input-sm input-primary input-bordered rounded-full bg-base-300'
						value={query}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
};

export default PrimarySearchBar;
