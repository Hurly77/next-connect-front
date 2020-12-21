import React from 'react'
import request from '../../Redux/actions/friendActions'

export const RequestButton = ({handleClick}) => {
  return (
      <button onClick={handleClick}>add Friend</button>
  )
}

export default RequestButton

