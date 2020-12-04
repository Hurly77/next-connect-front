import React from 'react'
import ReactDom from 'react-dom'
import EditAbout from '../Profile/EditAbout'

export const editModal = ({open, children, onClose}) => {
  if (!open) return null
  return ReactDom.createPortal (
    <> 
      <div className="edit-modal">
        <button className="edit-modal-btn" onClick={()=> onClose()}>X</button>
        <EditAbout />
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default editModal