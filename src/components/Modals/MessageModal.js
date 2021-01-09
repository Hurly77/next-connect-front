import React from 'react'
import ReactDom from 'react-dom'
import Inbox from '../Inbox/Inbox'

const BUTTON_STYLE = {
  backgroundColor: 'transparent',
  paddingBottom: '50px',
  border: 'none',
  width: '15px',
  height: '15px'
}

export const MessageModal = ({open, children, onClose}) => {
  if (!open) return null
  return ReactDom.createPortal (
    <> 
      <div className="inbox-modal">
        <button style={BUTTON_STYLE} onClick={()=> onClose()}>↓</button>
          <h3>notifications</h3>
        <Inbox />
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default MessageModal


