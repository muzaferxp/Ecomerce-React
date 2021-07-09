import React from "react";
import { Link } from "react-router-dom";

import Cookies from 'universal-cookie';

const TopMenu = () => {
  function handleClick(e) {
    const cookies = new Cookies();
    e.preventDefault();
    console.log('The link was clicked.');
    cookies.set('loggedin', 'false', { path: '/' });
    window.location.href = '/'
  }

  function home(){
    window.location.href = '/'
  }
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#" onClick={home}>
           Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                 <li>
                    <Link className="dropdown-item text-white" to="/account/signin">
                      Sign In
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item  text-white" to="/account/signup">
                      Sign Up
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-white" to='#' onClick={handleClick}>
                      Logout
                    </Link>
                  </li>
             
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default TopMenu;
