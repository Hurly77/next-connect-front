import React, { Component } from 'react'
import './primarySearch.css'
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
    this.props.query(this.state.query, this.props.history)
  }
  
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input type="search" name="search" className='search' onChange={this.handleChange} value={this.state.query}>
          </input>
        </form>
    )
  }
}

export default withRouter(connect(null, {query})(PrimarySearchBar))
