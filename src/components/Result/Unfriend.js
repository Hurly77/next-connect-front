import React from 'react'

const Unfriend = ({unfriend, aU, pU, history}) => {
  return (
    <button onClick={() => unfriend(aU, pU, history)}>unfriend</button>
  )
}

export default Unfriend
