import React from "react";
import { Link } from "react-router-dom";
// import "./assets/style.css";
export default function MainNavbar() {
  return (
    <>
      {/* <div>
    Furniro
    </div> */}
      <nav className="nav">
        <Link className="nanlink text-dark" to="/">
          Home
        </Link>
        <Link className="nanlink text-dark" to="/about">
          About
        </Link>
        <Link className="nanlink text-dark" to="/shop">
          Shop
        </Link>
        <Link className="nanlink text-dark" to="/contact">
          Contact
        </Link>
      </nav>
    </>
  );
}
