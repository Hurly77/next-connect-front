import React from 'react'
import {useState} from 'react'
import MessageModal from './MessageModal'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInbox} from '@fortawesome/free-solid-svg-icons'

export const InboxButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const inbox = <FontAwesomeIcon size="2x" icon={faInbox} />
  return (
    <div className="inbox-button">
    <button className="open-inbox" onClick={() => setIsOpen(true)}>
      {inbox}
    </button>
      <MessageModal open={isOpen} onClose={() => setIsOpen(false)} />						
  </div>
  )
}

export default InboxButton