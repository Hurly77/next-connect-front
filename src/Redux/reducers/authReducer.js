
const authReducer = (state = {user: {}, loading: false}, action) => {
  console.log(action)
  switch(action.type) {
    case 'AUTH_SUCCESS':
      return {...state, user: action.user, loading: false}

      default:
        return state;
  }

}

export default authReducer;