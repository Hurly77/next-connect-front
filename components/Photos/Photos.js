import React from 'react'
import './photos.css'

const mapImages = photos => {
  return photos.map((photo) => {
    if(photo)
    {return (
      <div className="img">
        <img src={photo} />
      </div>
    )}
  })
}

const Photos = ({photos}) => {
  return (
    <div className="user-photos">
      {mapImages(photos)}
    </div>
  ) 
}

export default Photos