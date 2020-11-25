import React from 'react'

export const Modal = ({open, children, onClose}) => {
  if (!open) return null
  return (
    <div className="bg-modal">
    <div className="modal-content">
      <button onClick={()=> onClose()}>X</button>
      {children}
    </div>
  </div>
  )
}

export default Modal