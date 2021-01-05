import React from 'react'
import './SiteBar.css'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import NavMenu from '../components/NavBar/NavMenu'
import PrimarySearchBar from '../components/NavBar/PrimarySearchBar'

const SiteBar = () => {
    return (
      <AppBar className="app-bar" id="siteBar">
        <ToolBar id="nav-bar">
              <PrimarySearchBar />
              <NavMenu />
        </ToolBar>
      </AppBar>
    )
  }
export default SiteBar
