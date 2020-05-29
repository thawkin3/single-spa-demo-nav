import React from "react";

const navStyles = {
  display: "flex",
  flexDirection: "row",
  padding: "20px",
  background: "#000",
  color: "#FFF"
};

const linkStyles = {
  marginRight: "20px",
  color: "#FFF"
};

export default function Root(props) {
  return (
    <nav style={navStyles}>
      <a href="/page1" style={linkStyles}>
        Page 1
      </a>
      <a href="/page2" style={linkStyles}>
        Page 2
      </a>
    </nav>
  );
}
