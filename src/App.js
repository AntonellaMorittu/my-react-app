import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My first Website build with React</h1>
        </header>
      </div>
    );
  }
}

function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.profession}</p>
    </div>
  );
}

var app = (
  <div>
    <Person name='Antonella' profession='ROCKSTAR' />
    <Person name='Gandalf' profession='WIZARD' />
    <Person name='Frodo' profession='HOBBIT' />
    <Person name='Batman' profession='SUPERHERO' />
  </div>
);

ReactDOM.render(app, document.querySelector('#app'));


export default App;
