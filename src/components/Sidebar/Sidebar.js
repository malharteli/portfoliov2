import React from 'react'
import {Paper, Typography, Container, Link} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'


const styles = makeStyles(theme =>({
  sidebar:{
    display:'flex',
    backgroundColor: 'rgba(122,180,193, 0.3)',
    zIndex:5,
    // opacity: '0.3',
    width: '25%',
    [theme.breakpoints.down('md')]:{
      width: '0px',
      display:'none'
    }
  },
  infobar:{
    display: 'flex',
    'flow-direction': 'column',
  },
  text:{
    opacity: '1.0',
  }
}))

function Sidebar(props){
  const classes = styles();

  return(
    <Paper classes={{
      root: classes.sidebar
    }}>
      <Typography classes={{root: classes.text}}>Hi</Typography>
    </Paper>
  )
}

export default Sidebar
