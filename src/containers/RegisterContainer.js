import React, { Component } from 'react'
import registerNewUser from '../Redux/actions/authAction'
import RegisterPage from '../components/RegisterPage'
import { connect } from 'react-redux'

class RegisterContainer extends Component {

  render() {
    console.log(this.props)
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
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    registerNewUser: () => dispatch(registerNewUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)