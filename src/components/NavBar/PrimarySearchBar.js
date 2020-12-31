import React, { Component } from 'react'
import { connect } from 'react-redux'
import query from '../../Redux/actions/queryActions'
import {withRouter} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons'

class PrimarySearchBar extends Component {

  state = {
    query: '',
    hidden: false
  }

  handleClick = (e) => {
    console.log('clicked')
    this.setState(prevState => {
      return {
        ...this.state,
        hidden: !prevState.hidden
      }
    })
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <FontAwesomeIcon icon={faSearch} onClick={this.handleClick}/>
          <input type="text" name="search" placeholder="Search" className={this.state.hidden ? 'hidden' : 'search'} onChange={this.handleChange} value={this.state.query}/>
        </form>
      </div>
    )
  }
}

export default withRouter(connect(null, {query})(PrimarySearchBar))
