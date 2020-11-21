import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import NavMenu from '../components/NavBar/NavMenu'
import Logout from '../components/NavBar/Logout'
import PrimarySearchBar from '../components/NavBar/PrimarySearchBar'

export default class SiteBar extends Component {
  render() {
    return (
      <AppBar position="static">
        <ToolBar>
              <NavMenu />
              <PrimarySearchBar />
              <Logout />
        </ToolBar>
      </AppBar>
    )
  }
}
