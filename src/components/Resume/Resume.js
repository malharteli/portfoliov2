import React from 'react'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import {makeStyles} from '@material-ui/styles'

const experience = {
    Work:[
        {
            title: "Code Coach",
            company: "The CodeWiz",
            date: 'September 2019 - Present',
            points: [
                'Guide students through a dedicated FLL curriculum',
                'Teach important skills in code and organization',
                'Tutor young children on complex computational subjects including advanced Java and Algorithms'
            ]
        },
        {
            title: 'Summer Teaching Assistant',
            company: "Digital Media Academy",
            date: 'July 2016 - August 2018',
            points: [
                'Taught Game Design Principles using the Unity Game Engine',
                'Managing scheduling and maintenance of equipment for use by students and faculty',
                'Worked with a variety of professionals to demonstrate the wide swath of skills required for ambitious game projects'
            ]
        },
    ],
    Projects:[
        {
            title: 'GrabThatSpot',
            role: 'Developer',
            github: 'https://github.com/sepia-victor/sepia-victor',
            link: 'https://grabthatspot.com/',
            stack: 'Firestore, React, Google Cloud Functions, Material UI, Storybook, Node',
            points: [
                'Developed a Progressive Web Application designed to facilitate parking spot auctions and sharing',
                'Managed a Firestore database and a central repository, assiging tasks to a team of fellow developers',
                'Used Google APIs to create and populate a map with GeoLocation data gathered from users.'
            ]
        },
        {
            title: 'NotRis',
            role: 'Developer',
            github: 'https://github.com/malharteli/CrazyTris',
            stack: 'Matterjs, Phaser 3.0, Javascript',
            points: [
                'Built a game with a recently updated Javascript Game Engine',
                'Expanded on provided physics engine, creating additional scripts that enable the slicing of shapes in Matterjs',
                'Implemented new methods and algorithms to handle complex shapes and end user interactions'
            ]
        }
    ]
}

const styles = makeStyles(theme=>({
    base: {
        paddingLeft: '3em',
        display:'flex',
        'flex-direction': 'column',
        justifyContent: 'space-around',
        color: '#5A6270',
        textAlign: 'left',
        fontSize: 20,
        lineHeight: 1.5,
    },
    expBase:{
        display:'flex',
        'flex-direction': 'column',
        justifyContent: 'space-around',
        paddingBottom: '3em',
        paddingTop: '1em',
    },
    expItem:{
        paddingTop: '0.55em'
    },
    lineItem:{
        paddingTop: '0.25em'
    }
}))

function Resume(props){
    const classes = styles();

    return(
        <Box id="ResumeContainer" classes={{root:classes.base}}>
            <Box id="WorkExpCont" classes={{root:classes.expBase}}>
                <Box fontWeight='bold' fontSize={30}>EMPLOYMENT HISTORY</Box>
                {experience.Work.map(job=>(
                    <Box classes={{root: classes.expItem}}>
                        <Box fontWeight='bold'>{job.title}</Box>
                        <Box>{job.company} | {job.date}</Box>
                        <Typography component='ul' classes={{root: classes.lineItem}}>
                            {job.points.map(point=>(
                                <li>{point}</li>
                            ))}
                        </Typography>
                    </Box>
                ))
                }
            </Box>
            <Box id="ProjCont" classes={{root:classes.expBase}}>
                <Box fontWeight='bold' fontSize={30}>PROJECT HISTORY</Box>
                {experience.Projects.map(job=>(
                    <Box classes={{root:classes.expItem}}>
                        <Box fontWeight='bold'>{job.title}</Box>
                        <Box>{job.role} | <Link color='inherit' underline='hover' href={job.github}>Github</Link></Box>
                        <Typography component='ul' classes={{root:classes.lineItem}}>
                            {job.points.map(point=>(
                                <li>{point}</li>
                            ))}
                        </Typography>
                    </Box>
                ))
                }
            </Box>
        </Box>
    )
}

export default Resume