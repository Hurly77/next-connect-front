import React from 'react'
import ReactDom from 'react-dom'
import About from '../Profile/About'

const MODAL_STYLES = {
  postition: 'fixed',
  transform: 'translate(0, -50%)',
  borderRadius: '5px',
  width: '400px',
  height: '500px',
  backgroundColor: '#23395B',
  marginLeft: '75%',
  paddingTop: '10px',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingBottom:'40px',
  zIndex: 'auto',
}

const BUTTON_STYLE = {
  backgroundColor: 'transparent',
  paddingBottom: '50px',
  border: 'none',
  width: '15px',
  height: '15px'
}

export const EditModal = ({open, children, onClose}) => {
  if (!open) return null
  return ReactDom.createPortal (
    <> 
      <div className="about-modal" style={MODAL_STYLES}>
        <button style={BUTTON_STYLE} onClick={()=> onClose()}>↓</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default EditModal