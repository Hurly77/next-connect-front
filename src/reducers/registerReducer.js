
const registerReducer = (state = {user: {}, loading: false}, action) => {
  switch(action.type) {
    case 'LOADING_NEW_USER':
      return {
        ...state,
        user: {...state.user},
        loading: true
      }
    case 'NEW_USER':
      return {
        ...state,
        user: action.user
      }

      default:
        return state;
  }

}

export default registerReducer;