import React from 'react'

const AcceptFriend = ({deny, accept, aU, pU, history}) => {
  
  return (
    <>
    <button onClick={() => accept(aU, pU, history)}>accept</button>
    <button onClick={() => deny(aU, pU, history)}>deny</button>
    </>
  )
}

export default AcceptFriend
