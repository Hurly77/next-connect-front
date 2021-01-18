export const createPost = (state = {userPosts: [], friendsPosts: [], allPosts: [], userPhotos: []}, action) => {
  let idx;
  switch(action.type){
    case 'NEW_POST':
      const newpost = action.payload
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

    case 'USER_PHOTOS': 
    return {
      ...state,
      userPhotos: action.payload.photos
    }
    case 'CREATE_COMMENT':
      idx = state.allPosts.findIndex(post => post.post.id === action.payload.id);
      return {
        ...state,
        allPosts: [...state.allPosts.slice(0, idx), action.payload, ...state.allPosts.slice(idx + 1)]
      }
    
    default:
      return state;
  }
}

export default createPost
