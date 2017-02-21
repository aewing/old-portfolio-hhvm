import React from 'react'
import { Navbar, NavItem } from 'react-materialize'
import { Link } from 'react-router'

export default class AppController extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $('.button-collapse').sideNav();
    $(document).on('click', 'a', function(e) {
      $('button-collapse').sideNav('hide');
    });
  }

  render() {
    return (
      <div className="app__wrapper">
        <nav className="p-l-2">
          <div className="nav-wrapper">
            <div className="col s12">
              <Link to="/" className="brand-logo">
                <img src="/img/aewing-logo.png" height="90" />
              </Link>
              <ul className="p-l-2 right hide-on-med-and-down">
                <li>
                  <Link to="/open-source">Open Source</Link>
                </li>
                <li>
                  <Link to="/playground">Playground</Link>
                </li>
              </ul>
              <ul id="nav-mobile" className="side-nav" style={{transform:'translateX(-100%)'}}>
                <li>
                  <Link to="/open-source">Open Source</Link>
                </li>
                <li>
                  <Link to="/playground">Playground</Link>
                </li>
              </ul>
              <a className="button-collapse" href="#" data-activates="nav-mobile"><i className="material-icons">view_headline</i></a>
            </div>
          </div>
        </nav>
        <div className="app__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
