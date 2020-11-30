import React, { Component } from 'react'
import { connect } from 'react-redux'
import query from '../../Redux/actions/queryActions'
import {withRouter} from 'react-router-dom'

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

  handleSubmit = (e) => {
    e.preventDefault()
    query(this.state.query)
    this.props.history.push('/results')
    this.setState({
      ...this.state,
      query: ''
    })
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="search" placeholder="Search" className="search" onChange={this.handleChange} />
          <button type="submit">fdfd</button>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, {query})(PrimarySearchBar))
