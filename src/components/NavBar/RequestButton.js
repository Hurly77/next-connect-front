import React from 'react'

export const RequestButton = ({request, aU, pU, history}) => {
  return (
      <button onClick={() => request(aU, pU, history)}>add Friend</button>
  )
}

export default RequestButton

