import React, { Component } from 'react';
import NavBar from '../src/components/NavBar';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home';
import Game from '../src/components/Game';
import Details from '../src/components/Details';


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Guess Who</h1>
        </header>
        <body>
          <div>
            <Router>
              <div>
                <NavBar />
                <Route exact path="/" component={Home} />
                <Route exact path="/game" component={Game} />
                <Route exact path="/details" component={Details} />
              </div>
            </Router>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
