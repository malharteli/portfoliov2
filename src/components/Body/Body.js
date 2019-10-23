import React from 'react'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/styles'

const styles = makeStyles(theme=>({
    base: {
        display:'flex',
    }
}))

function Body(props){
    const classes = styles();
    return(
        <Box fixed classes={{
            root: classes.base
        }}>
            {props.children}
        </Box>
    )
}

export default Body