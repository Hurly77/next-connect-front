import React from 'react'
import {connect} from 'react-redux'
import {EditButton} from '../ModalButtons/EditButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase, 
  faUniversity, 
  faHandHoldingHeart, 
  faMapMarkerAlt, 
  faHome, 
  faClock  
} from '@fortawesome/free-solid-svg-icons'


const About = ({user}) => {
  const work = <FontAwesomeIcon size="3x" icon={faBriefcase} />
  const education = <FontAwesomeIcon size="3x" icon={faUniversity} />
  const relationship = <FontAwesomeIcon size="3x" icon={faHandHoldingHeart} />
  const lives = <FontAwesomeIcon size="3x" icon={faMapMarkerAlt} />
  const from = <FontAwesomeIcon size="3x" icon={faHome} />
  const joined = <FontAwesomeIcon size="3x" icon={faClock} />

  console.log(user)
  return (
  <div className="about-wrapper">
  <h2 className="about-title">About</h2>
  <br />
    <div className="about-details">
        <div>{work} {!user.work ? <h4>Tell Us about yourself</h4>:user.work}</div>
        <br />
        <div>{education}{user.education}</div>
        <br />
        <div>{relationship}{user.relationship}</div>
        <br />
        <div>{lives}{user.lives}</div>
        <br />
        <div>{from}{user.from}</div>
        <br />
        <div>{joined}{user.joined}</div>
        <br />
  <p>{user.c_id}</p>
    </div>
    <EditButton />
  </div>
  )
}


const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(About)