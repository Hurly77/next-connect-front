import React from 'react'
import '../styles/navbar.css'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import NavMenu from '../components/NavBar/NavMenu'
import PrimarySearchBar from '../components/NavBar/PrimarySearchBar'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

const useStyles = makeStyles({
  root: {
    width: '100%',
    background: '#161925',
    position: 'fixed',
    overFlow: 'hidden',
    top: 0
  }
})

const SiteBar = () => {
    const classes = useStyles()
    return (
      <AppBar className={classes.root} >
        <ToolBar id="nav-bar">
              <PrimarySearchBar />
              <NavMenu />
        </ToolBar>
      </AppBar>
    )
  }
export default SiteBar
