import React, { useState } from "react";
import "./style.css";

import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import CartModal from "./CartModal";
export default function Navbar(props) {
  const [navbar, setNavbar] = useState(false);
  const changeBg = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBg);
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg ${
          navbar ? "my-navbar-active" : "my-navbar"
        }`}
      >
        <h1 className="navbar-brand ml-5"style={{ fontSize: "40px" }}>
          <Link style={{ color: "black" }} to="/">
            Grival
          </Link>
        </h1>
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
          <ul className="navbar-nav ml-auto " id="my-item">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Price
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Log in
              </a>
            </li>
            <li className="nav-item">
              <CartModal/>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
