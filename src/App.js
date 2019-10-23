import React from 'react';
import './App.css';
import Image from './components/Gallery/Image'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Body from './components/Body/Body'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import MontserratMedium from './fonts/Montserrat-Medium.ttf'
import MontserratBold from './fonts/Montserrat-Bold.ttf'
import MontserratBlack from './fonts/Montserrat-Black.ttf'


const montserrat ={
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    src: `
      local('Montserrat')
      local('Montserrat-Medium'),
      url(${MontserratMedium}) format('ttf')
    `,
}

const montserratbold = {
  fontFamily: 'Montserrat',
  fontStyle: 'bold',
  fontWeight: 'bold',
  src: `
    local('Montserrat-Bold),
    url(${MontserratBold}) format('ttf')
    `
}


const customTheme = createMuiTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif"
    ].join(',')
  },
  override:{
    MuiCssBaseline:{
      '@global':{
        '@font-face': [montserrat],
        '@font-face': [montserratbold]
      }
    }
  },
  palette:{
    primary:{
      main: '#64b5f6'
    },
    secondary:{
      light: '',
      main:'#7ab4c1',
      contrastText: '#FFFFFF',
    }
  }

})

function App() {
  return (
  <MuiThemeProvider theme={customTheme}>
    <Header />
    <div className="App">
      <Body>
        <Sidebar />
        <Image image='test'/>
      </Body>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
