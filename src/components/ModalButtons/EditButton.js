import React from 'react'
import {useState} from 'react'
import EditModal from '../Modals/EditModal'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEdit} from '@fortawesome/free-solid-svg-icons'

export const EditButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const Edit = <FontAwesomeIcon size="2x" icon={faEdit} />
  return (
    <div className="Edit-button">
    <button className="open-Edit" onClick={() => setIsOpen(true)}>
      {Edit}
    </button>
      <EditModal open={isOpen} onClose={() => setIsOpen(false)} />						
  </div>
  )
}

export default EditButton