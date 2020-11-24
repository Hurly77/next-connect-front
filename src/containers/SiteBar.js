import React from 'react'
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
  }
})

const SiteBar = ({loggedIn}) => {

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

  const mapStateToProps = state => {
    return {
      loggedIn: state.auth.logg
    }
  }

export default connect(mapStateToProps)(SiteBar)
