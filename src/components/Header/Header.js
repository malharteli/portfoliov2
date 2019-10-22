import React from 'react'
import {Paper, Typography, Container, Link, CssBaseline} from '@material-ui/core'
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
        color: 'white',
        borderRadius: '0',
    },
    headerText: {
        border: '16px solid white',
        padding: '32px',
        color: 'white',
        maxWidth: '80%',
        marginBottom: '2%',
    },
    linkBar: {
        display: 'flex',
        'flex-direction': 'row',
        justifyContent: 'space-around',
        paddingTop: '15px',
        maxWidth: '80%'
    }


}))

function Header(props){
    const classes = styles();

    return(
        <Paper classes={{
            root: classes.navbar
        }}>
            <CssBaseline />
            <Typography classes= {{root: classes.headerText}}className="customfont flex items-center justify-between p-24" fontStyle="bold" variant='h1'>MALHAR TELI</Typography>
            <Typography className="customfont flex items-center justify-between p-24" fontStyle="bold" variant='h5'>Full Stack Engineer</Typography>
            <Container classes={{root:classes.linkBar}}>
                <Link color='inherit' underline='hover' href='mailto:malhar.teli@gmail.com'>malhar.teli@gmail.com</Link>
                <Link color='inherit' underline='hover'
                href='https://linkedin.com/in/malharteli'>LinkedIn</Link>
                <Link color='inherit' underline='hover' href='https://github.com/malharteli/'>Github</Link>
                <Link color='inherit' underline='hover'>Cell: (617) 678-4014</Link>
            </Container>
        </Paper>
    )
}

export default Header

