import React from 'react'
import { bindActionCreators } from 'redux';

const userReducer = (state = {users: []}) => {
  switch(bindActionCreators.type) {
    case 'ADD_USER':
      return {
        ...state

      }

    default: 
    return state
  }
}

export default userReducer;
