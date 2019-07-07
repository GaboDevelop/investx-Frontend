import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";
import logo from "../images/logo.png";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <div className="container headerNav">
            <nav className="navbar navbar-expand-lg navbar-light row">
              <Link className="navbar-brand col-3" to="/">
                <img className="Navbar__brand-logo" src={logo} alt="Logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="/navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="col-6 offset-1">
                  <ul className="navbar-nav d-flex">
                    <li className="nav-item active mr-auto">
                      <Link className="nav-link" to="/">
                        <i className="fas fa-home" /> Home
                      </Link>
                    </li>
                    <li className="nav-item mr-auto">
                      <Link className="nav-link" to="/proyectos">
                        <i className="fas fa-book" /> Proyectos
                      </Link>
                    </li>
                    <li className="nav-item mr-auto">
                      <Link className="nav-link " to="/">
                        <i className="fas fa-code" /> Developers
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="col-3 dBoton">
                  <Link className="nav-link align-self-end" to="/login">
                    <i className="fas fa-sign-in-alt" />
                    Login/Registro
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
