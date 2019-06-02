import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid home">
        <div className="row content-slider">
          <div className="col-3">
            <br />
            <div className="infoContent ml-2 mt-4">
              <h1>Badge Management System</h1>
              <Link to="/" className="btn btn-primary">
                Start
              </Link>
            </div>
          </div>
          <div className="col-9" />
        </div>
      </div>
    );
  }
}

export default Home;
