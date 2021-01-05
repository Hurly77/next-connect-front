import React, {Component} from 'react'
import Profile from '../components/Profile/Profile'
import ProfileImage from '../components/Profile/ProfileImage'
import Banner from '../components/Profile/Banner'
import { connect } from 'react-redux'
import {checkFriends} from '../Redux/actions/friendActions'
import {fetchUserPosts} from '../Redux/actions/postActions'


 class ProfileHead extends Component {
   componentDidMount(){
     this.props.checkFriends(this.props.currentUser.id)
     this.props.fetchUserPosts(this.props.currentUser.id)
   }

  render = () => {
  return (
    <>
      <Banner />
      <ProfileImage />
      <Profile />
    </>
  )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
  }
}

export default connect(mapStateToProps, {checkFriends, fetchUserPosts})(ProfileHead)
