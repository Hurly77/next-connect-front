import React from 'react'
import ReactDom from 'react-dom'
import EditAbout from './EditAbout'

export const editModal = ({open, children, onClose, myRef}) => {
  if (!open) return null
  return ReactDom.createPortal (
    <> 
      <div ref={myRef} className="edit-modal">
        <button className="edit-modal-btn" onClick={()=> onClose()}>X</button>
        <EditAbout open={open} onClose={onClose}/>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default editModal