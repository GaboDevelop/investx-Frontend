import React from "react";
import { Link } from "react-router-dom";
import ResumenProyecto from "../components/ResumenProyecto";
import "./styles/Home.css";

class Proyectos extends React.Component {
  render() {
    return (
      <div className="container-fluid home">
        <div className="row content-slider contenedor-titulos">
          <div className="offset-1 col-4 p-2 contenedor-empresa">
            <h1 className="titulo-empresa">Investx</h1>
            <h3 className="eslogan-empresa">Investigaciones</h3>
            <Link to="/nuevo-proyecto">
              <i class="fas fa-folder-plus" /> Nueva Investigacion
            </Link>
          </div>

          <div className="offset-1 col-5">
            <div className="row contenedor-resumen">
              <ResumenProyecto
                nombreProyecto="Proyecto 1"
                nombreAutor="Gabriel Ortega"
                idProyecto="1"
              />
            </div>

            <div className="row contenedor-resumen">
              <ResumenProyecto
                nombreProyecto="Proyecto 2"
                nombreAutor="Maximiliano"
                idProyecto="2"
              />
            </div>
            <div className="row contenedor-resumen">
              <ResumenProyecto
                nombreProyecto="Proyecto 3"
                nombreAutor="Oscar"
                idProyecto="3"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Proyectos;
