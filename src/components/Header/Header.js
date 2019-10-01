import React from 'react'
import {Card, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const styles =  makeStyles(theme=>({
    navbar : {
        display: 'box',
        backgroundColor: '#7AB4C1',
        zIndex: 4,
        width:'100%'
    },

}))

function Header(props){
    const classes = styles();

    return(
        <Card classes={{
            root: classes.navbar
        }}>
            <Typography className="customfont flex items-center justify-between p-24" variant='h1'>Malhar Teli</Typography>
            <h2>Full Stack Engineer</h2>
        </Card>
    )
}

export default Header

