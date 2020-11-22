import React, { Component } from 'react'
import Posted from '../containers/Posted'
import NewPost from '../components/Feed/NewPost'

export default class FeedPage extends Component {
  render() {
    return (
      <div>
        <NewPost />
        <Posted />
      </div>
    )
  }
}
