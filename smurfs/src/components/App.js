import React, { Component } from 'react';
import './App.css';
import SmurflList from './SmurfsList';
import AddSmurfForm from './AddSmurfForm';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <Router>
      <div className="App">
        <Route exact path='/' component={SmurflList}/>
        <Route path='/addform' component={AddSmurfForm}/>
      </div>
      </Router>
    );
  }
}

export default App;
