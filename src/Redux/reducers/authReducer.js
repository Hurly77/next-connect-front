
const authReducer = (state = { loggedIn: false, currentUser: {}}, action) => {
  console.log(action)
  switch(action.type) {
    case 'AUTH_SUCCESS':
     return {
       ...state,
       loggedIn: action.payload.loggedIn,
       currentUser: action.payload.currentUser
     }
     case 'LOGOUT':
      return {
        ...state,
        loggedIn: false,
        currentUser: {},
      };
    default:
      return state;
  }
}

export default authReducer;