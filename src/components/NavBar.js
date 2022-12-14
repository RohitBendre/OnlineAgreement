import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg"  style={{
        position: "fixed",
        width: "100%",
        backgroundColor: "#A3E4D7",
        color : "black",
        margin : "100",
        height : "50",
        top: "0",
        }} >
          <div className="container-fluid" >
            <a className="navbar-brand text-dark" href="/">
              RENT AGREEMENT
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-dark" aria-current="page" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
