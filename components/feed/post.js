import { useState } from 'react';
import Avatar from '@/ui/media/avatar';
import AddComment from './add-comment';
import Comments from './comments';
import styles from '@/styles/comps/post.module.scss';

const Post = ({ post, comments }) => {
  return (
    <div key={post.id} className='w-full card bg-primary'>
      <div className='flex items-center p-3 my-3 card-title'>
        <Avatar />
        <div className='mx-3'>
          <h4>{post.users_full_name}</h4>
          <small>{post.posted_at}</small>
        </div>
      </div>
      <div class='divider'></div>
      <div className='card-body bg-base-100'>
        <p className='text-base-content'>{post.text}</p>
      </div>
      <div className='flex flex-col items-center card-actions'>
        <Comments comments={comments} />
        <AddComment postId={post.id} />
      </div>
    </div>
  );
};

export default Post;
