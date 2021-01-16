import React from 'react';
import './App.scss';
import { ApplicationViews } from './ApplicationViews';
import { NavBar } from './nav/nav'
import 'materialize-css/dist/css/materialize.min.css';

class Bio extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <h2>INSIDE APP COMPONENT</h2>
        <button className="btn btn-info">I am a button</button>
        <img src={'../public/favicon.ico'} />
              </div>
      
    );
  }
}

export default Bio;
