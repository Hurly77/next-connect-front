import React, { Component } from 'react'
import registerNewUser from '../actions/registerNewUser'
import RegisterPage from '../RegisterPage/RegisterPage'
import { connect } from 'react-redux'

class RegisterContainer extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.registerNewUser()
  }

  render() {
    return (
      <div>
        <RegisterPage register={this.props.registerNewUser}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    registerNewUser: state.registerNewUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerNewUser: () => dispatch(registerNewUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)