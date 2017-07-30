import * as React from 'react';
import './App.css';

const logo = require('./images/cathartes_header.png');

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="button nav-button">
            <span>Nav</span>
            <span>Login</span>
          </div>
        </div>
        <div className="App-body">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Record Book</h2>
        </div>
      </div>
    );
  }
}

export default App;
