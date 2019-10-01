import React from 'react'
import Gallery from '../../gallery.json'
import {Card, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import MaterialImage from 'material-ui-image'

const useStyles = makeStyles({
    layoutRoot: {},
    imageBox: {
        width: `60%`,
        height: 'auto',
        display: 'flex',
        alignItems: 'top',
        'flex-direction' :'row',
        justifyContent: 'center',
        textAlign: 'left',
        padding: 16
    },
    textBox: {
        display: 'flex',
        'flex-direction': 'column',
    },
    titlebox: {
        position: '0px'
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
            <img style={{width:'inherit', height:'inherit'}} src={imgObj.image} alt={imgObj.alt} />
            <div classes={{
                root: classes.textBox
            }}>
                <Typography className="flex items-center justify-between p-24" variant='h3'>{imgObj.title}</Typography>
                <div className='p-24'></div>
                <Typography className='justify-between p-24'>{imgObj.description}</Typography>
            </div>
        </Card>
    )

}

export default Image
