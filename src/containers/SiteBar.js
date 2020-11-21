import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import NavMenu from '../components/NavBar/NavMenu'
import PrimarySearchBar from '../components/NavBar/PrimarySearchBar'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: '#406E8E'
  }
})

const SiteBar = () => {

    const classes = useStyles()
    return (
      <AppBar position="static" className={classes.root}>
        <ToolBar>
              <NavMenu />
              <PrimarySearchBar />
        </ToolBar>
      </AppBar>
    )
  }

export default SiteBar
