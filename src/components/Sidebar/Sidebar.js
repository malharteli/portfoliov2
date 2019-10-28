import React from 'react'
// import {Typography, Container, Box, Link} from
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'


import {makeStyles} from '@material-ui/styles'


const styles = makeStyles(theme =>({
  sidebar:{
    display:'flex',
    backgroundColor: 'rgba(122,180,193, 0.3)',
    zIndex:5,
    padding:"5px",
    // opacity: '0.3',
    width: '25%',
    [theme.breakpoints.down('md')]:{
      width: '100%',
      // display:'none'
    }
  },
  infobar:{
    padding:'5px',
    maxWidth: '90%',
    display: 'flex',
    'flex-direction': 'column',
    // 'align-items':'center',
    justifyContent: 'space-around',
    color: '#5A6270',
  },
  infobox:{
    'text-align':'left',
  },
}))

function Sidebar(props){
  const classes = styles();

  return(
    <Box classes={{
      root: classes.sidebar
    }}>
      <Container classes={{root:classes.infobar}}>
          <Box classes={{root:classes.infobox}}>
            <Box fontWeight='bold' fontSize={20}>PROFESSIONAL PROFILE</Box>
            <Typography>I am a Full Stack Developer located in the New York Area. Seeking jobs in the wide world of development while pursuing opportunities to expand my skillset</Typography>
          </Box>
          <Box classes={{root:classes.infobox}}>
            <Box fontWeight='bold' fontSize={20}>TECH STACK</Box>
            <Typography>Technical: React/Redux, Java, Xcode, Node, PostrgreSQL, Firebase/FireStore</Typography>
            <Typography>Creative: Unreal Engine 4, Unity, Photoshop, Illustrator, After Effects, Maya, Zbrush</Typography>
            <Typography>Professional: Git, GitHub, Atlassian, Trello, Slack, Scrumm, Microsoft Office Suit</Typography>
          </Box>
          <Box classes={{root:classes.infobox}}>
            <Box fontWeight='bold' fontSize={20}>CONTACT ME:</Box>
            <Typography>Mobile: (617) 678-4014</Typography>
            <Typography>Email: <Link color='inherit' underline='hover' href='mailto:malhar.teli@gmail.com'>malhar.teli@gmail.com</Link></Typography>
            <Typography>Website: <Link color='inherit' underline='hover' href='/'>malharteli.me</Link></Typography>
            <Typography>LinkedIn: <Link color='inherit' underline='hover'
                href='https://linkedin.com/in/malharteli'>linkedin.com/in/malharteli</Link></Typography>
            <Typography>GitHub: <Link color='inherit' underline='hover' href='https://github.com/malharteli/'>github.com/malharteli/</Link></Typography>
          </Box>
          <Box classes={{root:classes.infobox}}>
            <Box fontWeight='bold' fontSize={20}>PERSONAL SKILLS</Box>
            <Typography component='ul'>
              <li>Excellent communication skills aimed at translating code into accessible human language</li>
              <li>A voracious appetite for new APIs and Technologies</li>
              <li>A can-do attitude to scale the heights of any challenge, technical or personal</li>
            </Typography>
          </Box>
      </Container>
    </Box>
  )
}

export default Sidebar
