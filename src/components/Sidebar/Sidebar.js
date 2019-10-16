import React from 'react'
import {Paper, Typography, Container, Link} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'


const styles = makeStyles(theme =>({
  sidebar:{
    display:'flex',
    backgroundColor: '#64b5f6',
    zIndex:5,
    opacity: '50%',
    width: '25%',
    [theme.breakpoints.down('md')]:{
      width: '0px',
      display:'none'
    }
  }
}))

function Sidebar(props){
  const classes = styles();

  return(
    <Paper classes={{
      root: classes.sidebar
    }}>
      <Typography>Hi</Typography>
    </Paper>
  )
}

export default Sidebar
