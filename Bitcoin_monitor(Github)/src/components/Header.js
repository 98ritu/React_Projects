import React from "react";

export default function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-dark fixed-top"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <ul className="nav mr-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About
              </a>
            </li>
          </ul>
          <a href="#" className="navbar-brand font-weight-bold ml-auto">
            <span style={{ color: "white" }}>
              <i className="fa fa-btc fa-2x" aria-hidden="true"></i> Monitor
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}
