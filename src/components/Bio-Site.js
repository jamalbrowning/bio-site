import React from 'react';
import './App.scss';
import { ApplicationViews } from './ApplicationViews';
import { NavBar } from './nav/nav'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'

class BioSite extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <ApplicationViews></ApplicationViews>
        
      </div>
      
    );
  }
}

export default BioSite;
