import React from 'react'
import ReactDom from 'react-dom'
import Inbox from './Inbox'

const MODAL_STYLES = {
  postition: 'fixed',
  borderRadius: '5px',
  width: '400px',
  height: '500px',
  backgroundColor: '#23395B',
  paddingTop: '10px',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingBottom:'40px',
  zIndex: 'auto',
}

const OVERLAY_STYLES = {
  postition: 'fixed',
  transform: 'translate(30%, -25%)',
  height: '1000px',
  paddingTop: '100px',
  paddingLeft: '33.3%',
  paddingRight: '33.3%',
  zIndex: '1000'
}

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
      <div style={OVERLAY_STYLES}>
      <div className="signup-modal" style={MODAL_STYLES}>
        <button style={BUTTON_STYLE} onClick={()=> onClose()}>↓</button>
        <Inbox />
        {children}
      </div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default MessageModal