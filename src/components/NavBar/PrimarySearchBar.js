import React, { Component } from 'react'

class PrimarySearchBar extends Component {

  state = {
    query: ''
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      query: e.target.value
    })
  }
  
  render() {
    return (
      <div>
          <input type="text" name="search" placeholder="Search" className="search" onChange={this.handleChange} />
      </div>
    )
  }
}

export default PrimarySearchBar
