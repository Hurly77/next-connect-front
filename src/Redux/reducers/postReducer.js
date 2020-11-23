export const createPost = (state = {post: {}, posts: []}, action) => {
  switch(action.type){
    case 'NEW_POST':
      return {
        ...state,
        post: action.payload.post
      };

    case 'POSTS':
      return {
        ...state,
        posts: action.payload.posts
      }
    
    default:
      return state;
  }
}

export default createPost
