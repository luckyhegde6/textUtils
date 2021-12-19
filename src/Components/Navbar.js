import React from 'react';
import {
  Link
} from "react-router-dom";
import PropTypes from 'prop-types'

function Navbar(props)
{
return(
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
  <div className="form-check form-switch text-primary">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.toggleMode} />
  <label className="form-check-label" htmlFor='flexSwitchCheckChecked'>Dark</label>
</div>
</nav>
)
}

export default  Navbar;
Navbar.propTypes = {
  title : PropTypes.string
}

Navbar.defaultProps = {
  title : "Textutils"
}


