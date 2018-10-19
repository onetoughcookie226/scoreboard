import React, { Component } from 'react';
import './App.css';
import Scoreboard from './components/Scoreboard';
import Title from './components/Title';
import Player from './components/Player';
import Clock from './components/Clock'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/} 
          <h1 className="App-title">Scoreboard</h1>
          
        </header>
        <main>
          <Title /> 
          <Scoreboard />
          <Player />
          <Clock date={Date()}/>
        </main>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
