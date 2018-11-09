import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage'
import AppBar from './AppBar'
import './App.css';
import AppLayout from './AppLayout'

class App extends Component {
  render() {
    return (
      <AppLayout>
        <AppBar/>
        <WelcomeMessage/>
      </AppLayout>
    );
  }
}

export default App;
