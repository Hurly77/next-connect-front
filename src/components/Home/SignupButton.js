import React from 'react'
import {useState} from 'react'
import Modal from './Modal'

export const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="signup-btn-contain">
    <button className="open-popup" onClick={() => setIsOpen(true)}>Create New Profile</button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />						
  </div>
  )
}

export default SignupButton
