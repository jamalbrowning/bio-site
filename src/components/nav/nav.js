import React from 'react';
import './nav.scss'
// import Bulma from 'bulma'
export const NavBar = (props) => {
  return (
            <div>
              <nav>
                <div class="nav-wrapper">
                  <a href="#" class="brand-logo center"><img class="avatar" src="https://i.ibb.co/YDJFsJ8/Avatar-Maker.png" alt="avatar of jamal" /></a>
                  <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                  </ul>
                </div>
              </nav>

              
            </div>
  );
};
