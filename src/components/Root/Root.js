import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
const Root = ({ children }) => (
  <section className="section">
    <div className="container">
      <NavBar />

      {children}
    </div>
  </section>
);

const NavBar = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-menu is-mobile">
      <div className="navbar-start">
        <Link to="/" className="button">Requests</Link>
        <Link to="/calendar" className="button">Calendar</Link>
      </div>
    </div>
  </nav>
);

Root.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired
};

export default Root;