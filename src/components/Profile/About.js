import React from 'react'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBriefcase, 
  faUniversity, 
  faHandHoldingHeart, 
  faMapMarkerAlt, 
  faHome, 
  faClock,
  faEdit  
} from '@fortawesome/free-solid-svg-icons'


const About = ({user}) => {
  const work = <FontAwesomeIcon size="3x" icon={faBriefcase} />
  const education = <FontAwesomeIcon size="3x" icon={faUniversity} />
  const relationship = <FontAwesomeIcon size="3x" icon={faHandHoldingHeart} />
  const lives = <FontAwesomeIcon size="3x" icon={faMapMarkerAlt} />
  const from = <FontAwesomeIcon size="3x" icon={faHome} />
  const joined = <FontAwesomeIcon size="3x" icon={faClock} />
  const editIcon = <FontAwesomeIcon size="lg" icon={faEdit} />

  console.log(user)
  return (
  <div className="about-wrapper">
  <h2 className="about-title">About</h2>
    <div className="about-details">
        <div>{work} {user.work}</div>
        <div>{education}{user.education}</div>
        <div>{relationship}{user.relationship}</div>
        <div>{lives}{user.lives}</div>
        <div>{from}{user.from}</div>
        <div>{joined}{user.joined}</div>
    </div>
  </div>
  )
}


const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(About)