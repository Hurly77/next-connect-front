import React from 'react'

const AcceptFriend = ({deny, accept, aU, pU}) => {
  
  return (
    <>
    <button onClick={accept(aU, pU)}>accept</button>
    <button onClick={deny(aU, pU)}>deny</button>
    </>
  )
}

export default AcceptFriend
