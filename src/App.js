import React, { Component } from 'react';
import './App.css';
import AutocompleteText from './AutocompleteText';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Game of thrones cities</h1>
        <AutocompleteText />
      </div>
    );
  }
}

export default App;
