import React, { Component } from 'react';
import Settings from '../Settings'
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
          <Settings/>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
