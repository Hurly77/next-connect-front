export const createPost = (state = {posts: []}, action) => {
  switch(action.type){
    case 'NEW_POST':
      const newpost = action.payload.posts
      return {
        ...state,
        posts: [newpost, ...state.posts]
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
