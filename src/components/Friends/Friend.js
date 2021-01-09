import React from 'react'
import './friend.css'

const Friend = ({props}) => {
	return (
		<div key={props.id} className="friend-card">
			<img src={props.photo_url} alt="avatar" className="friend-avatar"/>
			<h2 className="friend-name">{props.first_name} {props.last_name}</h2>
			<button className="friend-profile">•••</button>
		</div>
	)
}

export default Friend

