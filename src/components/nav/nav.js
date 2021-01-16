import React from 'react';
// import Bulma from 'bulma'
export const NavBar = (props) => {
  return (
            <div>
              <nav>
                <div class="nav-wrapper">
                  <img src="public/techs/firebase.png"></img>
                  <a href="#!" class="brand-logo" img='/Users/jamalbrowning/workspace/new_bio_site/bio-site/public/techs/eslint.png'>Logo</a>
                  <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                  <ul class="right hide-on-med-and-down">
                    <li><a href="sass.html">Bio</a></li>
                    <li><a href="badges.html">Projects</a></li>
                    <li><a href="collapsible.html">Technologies</a></li>
                    <li><a href="mobile.html">Mobile</a></li>
                  </ul>
                </div>
              </nav>

              <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">Javascript</a></li>
                <li><a href="mobile.html">Mobile</a></li>
              </ul>
            </div>
  );
};
