import React from 'react'
import {Paper, Typography, BottomNavigation} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const styles =  makeStyles(theme=>({
    navbar : {
        display: 'flex',
        backgroundColor: '#7AB4C1',
        zIndex: 4,
        width:'100%',
        paddingTop: '2%',
        paddingBottom: '2%',
        'flex-direction': 'column',
        'align-items': 'center',
        color: 'white'
    },
    headerText: {
        border: '16px solid white',
        padding: '16px',
        color: 'white',
        maxWidth: '66%',
    },
    linkBar: {
        display: 'flex',
        'flex-direction': 'row',
        justifyContent: 'center'
    }


}))

function Header(props){
    const classes = styles();

    return(
        <Paper classes={{
            root: classes.navbar
        }}>
            <Typography classes= {{root: classes.headerText}}className="customfont flex items-center justify-between p-24" variant='h1'>Malhar Teli</Typography>
            <Typography className="customfont flex items-center justify-between p-24" variant='subtitle1'>Full Stack Engineer</Typography>

        </Paper>
    )
}

export default Header

