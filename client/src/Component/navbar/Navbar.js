import React, { Component } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand" href="#">
            Navbar
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link to="/">
                  <span className="nav-link">
                    All Comics <span className="sr-only">(current)</span>
                  </span>
                </Link>
              </li>
              <li className="nav-item">
                <span className="nav-link">Kids</span>
              </li>
              <li className="nav-item">
                <span className="nav-link">Movies</span>
              </li>
              <li className="nav-item">
                <Link to="/view">
                  <span className="nav-link">TV Series</span>
                </Link>
              </li>
              <li>
                <span className="nav-link">
                  <div className="search-bar">
                    <input type="text" className="input" placeholder="&nbsp;" />
                    <span className="label">Search</span>
                    <span className="highlight" />
                    <div className="search-btn">
                      <i className="fas fa-search text-white" />
                    </div>
                  </div>
                </span>
              </li>
              <li>
                <span className="nav-link">
                  <div className="nightmood">
                    <i className="far fa-moon text-white" />
                  </div>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}
export default Navbar;
