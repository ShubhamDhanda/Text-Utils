import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props){
    return (<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid" style={{backgroundColor:props.mode==='light'?'white':'black'}}>
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">{props.class1}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
          <div className="form-check form-switch">
            <input type="checkbox" className="form-check-input"  onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
            <label className={`form-check-label ${props.mode==='light'?'text-dark':'text-light'}`} htmlFor="customSwitch1">Enable DarkMode</label>
      </div>
      </div>
      
    </div>
  </nav>
    )
}
Navbar.propTypes={
    title: PropTypes.string.isRequired,
    class1 :PropTypes.string
}
Navbar.defaultProps = {
    title: "title here",
    class1: "home here"
}
