import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
  //  First Way
    return (
      <div className="App">
        <h1>Test Case 1</h1>
      </div>
    );
  //  Second Way  
  // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Test Case 1'));
  }
}

export default App;
