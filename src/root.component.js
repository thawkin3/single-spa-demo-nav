import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./root.component.css";

export default function Root() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/page1" className="link">
          Page 1
        </Link>
        <Link to="/page2" className="link">
          Page 2
        </Link>
      </nav>
    </BrowserRouter>
  );
}
