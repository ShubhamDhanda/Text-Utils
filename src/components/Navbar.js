import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'



export default function Navbar(props){
    return (<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid" style={{backgroundColor:props.mode==='light'?'white':'black'}}>
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.class1}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          
          <li className="nav-item">
          </li>
        </ul>
      </div>
      <div class="form-check form-switch">
      <input type="checkbox" class="form-check-input"  onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
      <label class={`form-check-label ${props.mode==='light'?'text-dark':'text-light'}`} htmlFor="customSwitch1">{props.mode==='light'?'Enable DarkMode':'Enable LightMode'}</label>
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
