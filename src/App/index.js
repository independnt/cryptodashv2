import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage'
import AppBar from './AppBar'
import './App.css';
import AppLayout from './AppLayout'
import {AppProvider} from './AppProvider'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <WelcomeMessage/>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
