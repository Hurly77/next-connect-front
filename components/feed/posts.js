import Post from '@/feed/post';
import styles from '@/styles/pages/feedPage.module.scss';

const Posts = (props) => {
  return props.posts.map((post) => {
    return (
      <Post
        key={post.id}
        post={post}
        photos={post.photos}
        comments={post.comments}
      />
    );
  });
};

export default Posts;
