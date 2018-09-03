import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Helmet from './components/Helmet';
import BlankPage from './components/BlankPage';
import Iframe from './components/Iframe';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return [
      <Helmet />,
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Steps to reproduce the issue:
          <ul>
            <li>
              1. Navigate to Iframe and wait until the map loads completely.
            </li>
            <li>2. Navigate back to the blank page.</li>
            <li>3. Take a memory heap snapshot.</li>
            <li>
              4. Repeat steps 1. and 2. ten times, and take a new memory
              snapshot.
            </li>
            <li>5. Repeat step 4 five times.</li>
            <li>6. Remove Google Tag Manager from Helmet.js</li>
            <li>
              7. Repeat steps 1-5 without GTM, and compare the results. You
              should see memory usage slowly increasing with GTM, and without
              GTM it should be quite stable.
            </li>
          </ul>
        </p>
        <div className="nav">
          <ul>
            <li>
              <Link to="/blank">Blank page</Link>
            </li>
            <li>
              <Link to="/iframe">Iframe</Link>
            </li>
          </ul>
        </div>
      </div>,
      <Route path="/blank" component={BlankPage} />,
      <Route path="/iframe" component={Iframe} />,
    ];
  }
}

export default App;
