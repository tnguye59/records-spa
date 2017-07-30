import * as React from 'react';
import './App.css';

const logo = require('./images/cathartes_header.png');

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Record Book</h2>
        </div>
      </div>
    );
  }
}

export default App;
