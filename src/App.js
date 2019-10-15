import React from 'react';
import './App.css';
import Image from './components/Gallery/Image'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'


const customTheme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
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
        <Sidebar />
        <Image image='test'/>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
