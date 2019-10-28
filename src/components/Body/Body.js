import React from 'react'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/styles'

const styles = makeStyles(theme=>({
    base: {
        display:'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]:{
            flexDirection: 'column-reverse',
        }
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