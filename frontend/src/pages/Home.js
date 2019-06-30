import React from "react";
import { Link } from "react-router-dom";
import CardDeveloper from "../components/CardDeveloper";
import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid home">
        <div className="row content-slider contenedor-titulos">
          <div className="offset-1 col-4 p-2 contenedor-empresa">
            <h1 className="titulo-empresa">Investx</h1>
            <h3 className="eslogan-empresa">
              la web donde puedes guardar tus investiaciones
            </h3>
            <h4>Actualmente hay 7 proyectos de investigacion en la web</h4>
          </div>

          <div className="col-6">
            <h2 className="subtitulo-autores">Proyecto desarrollador por</h2>
            <div className="row">
              <div className="col-4">
                <CardDeveloper
                  name="Gabriel Ortega"
                  github="https://github.com/GaboDevelop"
                />
              </div>
              <div className="col-4">
                <CardDeveloper
                  name="Maximiliano"
                  github="https://github.com/GaboDevelop"
                />
              </div>
              <div className="col-4">
                <CardDeveloper
                  name="Oscar Marquez"
                  github="https://github.com/GaboDevelop"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row contenedor-titulos">
          <div className="offset-1 col-4">
            <div className="row">
              <div className="col-12" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
