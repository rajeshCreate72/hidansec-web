import React from "react";
import { Link } from "react-router-dom";
import "./main.css";

function FirstPage() {
  return (
    <section className="first-page">
      <div className="content fr-page">
        <div className="content idea">
          <p>Selete the motto long enough to fit here</p>
        </div>
        <div className="content policy">
          <p>
            Company's policy which is long enought to fit here like this We work
            with leading teams across multiple blockchains to provide a holistic
            and collaborative approach to security.
          </p>
        </div>
        <div className="content contact-fr">
          <button>Get in touch Button</button>
          <Link to="/blog">Read our blog</Link>
        </div>
      </div>
    </section>
  );
}

export default FirstPage;
