import React from 'react'
import Gallery from '../../gallery.json'
import {Card, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import MaterialImage from 'material-ui-image'

const useStyles = makeStyles({
    layoutRoot: {},
    imageBox: {
        width: `80%`,
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        'flex-direction' :'column',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 16
    },
    image: {
        height: `50px`,
        width: `auto`
    }
})

function Image(props)
{
    let imgObj = Gallery['gallery'][props.image]
    const classes = useStyles();

    return(
        <Card classes={{
            root: classes.imageBox
        }}>
            <img style={{width:'inherit', height:'inherit'}} src={imgObj.image} />
            <Typography className="flex items-center justify-between p-24" color="action" variant='h3'>{imgObj.title}</Typography>
            <Typography className='justify-between p-24'>{imgObj.description}</Typography>
        </Card>
    )

}

export default Image