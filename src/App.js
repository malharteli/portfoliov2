import React from 'react';
import './App.css';
import Image from './components/Gallery/Image'
import Header from './components/Header/Header'
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
    <div className="App">
      <header className="App-header">
        <Header />
        <Image image='test'/>
      </header>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
