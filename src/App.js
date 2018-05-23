import React, { Component } from 'react';
import './App.css';

import AppHeader from './AppHeader';
import AppBody from './AppBody';
import AppFooter from './AppFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
          <AppHeader/>
          <AppBody/>
          <AppFooter/>
      </div>
    );
  }
}

export default App;
