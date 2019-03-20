import React, { Component } from 'react';
import './App.css'
import KeyPad from './Container/KeyPad/KeyPad'
import Result from './Container/Result/Result'

class App extends Component {
  render() {
    return (
        <div>
          <div className="calculator">
            <h1>Calculator</h1>
            <Result/>
            <KeyPad/>
          </div>
        </div>
    );
  }
}

export default App;
