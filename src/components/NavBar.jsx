import React from "react";
import "./main.css";

function NavBar() {
  return (
    <div className="nav">
      <div className="logo">
        <h1>Hidansec</h1>
      </div>
      <div className="menu">
        <h3>Blog</h3>
        <h3>Audits</h3>
        <h3>Careers</h3>
      </div>
      <div className="contact">
        <h3>Get in touch</h3>
      </div>
    </div>
  );
}

export default NavBar;
