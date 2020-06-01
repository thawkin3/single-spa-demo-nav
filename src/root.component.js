import React from "react";
import "./root.component.css";

export default function Root() {
  return (
    <nav className="nav">
      <a href="/page1" className="link">
        Page 1
      </a>
      <a href="/page2" className="link">
        Page 2
      </a>
    </nav>
  );
}
