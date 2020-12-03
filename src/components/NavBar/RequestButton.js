import React, { Component } from 'react'

export default class RequestButton extends Component {
    state = {
      isFriends: false
    }
  
  handlePendingFriends = () => {

  }
  
  handleClick = () => {
    this.setState(previousState =>{
      return{isFriends: !previousState.isFriends}
    })
  }

  render() {
    if(!this.state.isFriends){
      return (  
        <button onClick={this.handleClick}>
          add Friend
        </button>
    )
    }else {
      return(<button onClick={this.handleClick}>
        requested
      </button>)
    }
    
  }
}
