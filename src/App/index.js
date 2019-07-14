import React, { Component } from 'react';
import Settings from '../Settings'
import Dashboard from '../Dashboard'
import Content from '../Shared/Content'
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
          <Content>
            <Settings/>
            <Dashboard/>
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;
