import React from 'react'

const Unfriend = ({unfriend, aU, pU}) => {
  return (
    <button onClick={unfriend(aU, pU)}>unfriend</button>
  )
}

export default Unfriend
