import React from 'react'

const Friend = ({props}) => {
	return (
		<div className="friend-card">
			<h1>{props.first_name} {props.last_name}</h1>
			<img src={props.avatar} alt="avatar" className="friend-avatar"/>
		</div>
	)
}

export default Friend

