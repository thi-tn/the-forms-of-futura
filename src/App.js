import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

//create alphabet array
function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
var chars = genCharArray('a', 'z');
chars.push('1','2', '3', '4', '5', '6', '7', '8', '9', '0');
function Alphabet() {
  return (
    <div className='row'>
      {chars.map(function(char, index){
        return <div className='col-3' key={ index }>{char}</div>;
      })}
    </div>
  )
}

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div>navbar</div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Alphabet/>
    );
  };
  
}

export default App;