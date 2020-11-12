

const mangeSignup = (state = {user: {}}, action) => {
  switch(action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        user: {...state.user}
      }

    default: 
    return state
  }
}

export default mangeSignup;
