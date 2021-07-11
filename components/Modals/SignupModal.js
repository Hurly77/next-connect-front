import React from 'react'
import ReactDom from 'react-dom'
import RegisterPopup from './RegisterPopup'

export const SignupModal = ({open, children, onClose}) => {
  if (!open) return null
  return ReactDom.createPortal (
    <> 
      <div className="overlay-style">
      <div className="signup-modal">
        <button className="btn-styles" onClick={()=> onClose()}>X</button>
        <RegisterPopup />
        {children}
      </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default SignupModal