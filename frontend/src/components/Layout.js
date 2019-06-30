import React from "react";

import Navbar from "./Navbar";

import "./styles/Layout.css";

function Layout(props) {
  //const children = props.children;
  return (
    <React.Fragment>
      <div className="bg-home">
        <Navbar />
        {props.children}
      </div>
    </React.Fragment>
  );
}

export default Layout;
