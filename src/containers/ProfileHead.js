import React from 'react'
import Profile from '../components/Profile/Profile'
import ProfileImage from '../components/Profile/ProfileImage'
import Banner from '../components/Profile/Banner'



export default function ProfileHead() {
  return (
    <>
      <Banner />
      <ProfileImage />
      <Profile />
    </>
  )
}
