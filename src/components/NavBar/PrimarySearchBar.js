import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class PrimarySearchBar extends Component {

  render() {
    return (
      <div className="primarySearch">
          <TextField label="Search" />
      </div>
    )
  }
}

export default PrimarySearchBar
