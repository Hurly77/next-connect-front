import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import NavMenu from '../components/NavBar/NavMenu'
import PrimarySearchBar from '../components/NavBar/PrimarySearchBar'
import { makeStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { Hidden } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
    background: '#161925',
    position: 'fixed',
    overFlow: 'hidden',
    top: 0
  }
})

const SiteBar = ({loggedIn}) => {

    const classes = useStyles()
    return (
      <AppBar className={classes.root}>
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
