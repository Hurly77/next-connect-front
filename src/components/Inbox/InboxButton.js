import React from 'react'
import {useState} from 'react'
import MessageModal from './MessageModal'

export const InboxButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="inbox-button">
    <button className="open-inbox" onClick={() => setIsOpen(true)}>
      Messages
    </button>
      <MessageModal open={isOpen} onClose={() => setIsOpen(false)} />						
  </div>
  )
}

export default InboxButton