import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import CharacterGrid from './components/CharacterGrid'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Guess Who</h1>
        </header>
        <p className="App-intro">
          <CharacterGrid />
        </p>
      </div>
    );
  }
}

export default App;
