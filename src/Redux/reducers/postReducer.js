export const createPost = (state = {userPosts: [], friendsPosts: [], allPosts: []}, action) => {
  switch(action.type){
    case 'NEW_POST':
      const newpost = action.payload.posts
      return {
        ...state,
        allPosts: [newpost, ...state.allPosts]
      };

    case 'FRIENDS_POSTS':
      return {
        ...state,
        friendsPosts: action.payload.posts
      }
    case 'USER_POSTS':
      return {
        ...state,
        userPosts: action.payload.posts
      }

    case 'ALL_POSTS':
      return {
        ...state,
        allPosts: action.payload.posts
      }
    
    default:
      return state;
  }
}

export default createPost
