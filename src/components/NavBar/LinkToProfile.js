import React from 'react'
import {Link} from 'react-router-dom'

export const LinkToProfile = () => {
  return (
    <button><Link className="result-btn-currentUser" to={"/profile"}>Profile</Link></button>
  )
}
