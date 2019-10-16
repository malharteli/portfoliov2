import React from 'react'
import Paper from '@material-ui/core/Paper'
import {makeStyles} from '@material-ui/styles'

const styles = makeStyles(theme=>({
    base: {
        display:'flex',
    }
}))

function Body(props){
    const classes = styles();
    return(
        <Paper fixed classes={{
            root: classes.base
        }}>
            {props.children}
        </Paper>
    )
}

export default Body