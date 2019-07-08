import React from "react";
import { Link } from "react-router-dom";
import "./styles/ResumenProyecto.css";
// Aprende más del Gravatar en: http://gravatar.com
function ResumenProyecto(props) {
  const nombreProyecto = props.nombreProyecto;
  const nombreAutor = props.nombreAutor;
  const idProyecto = props.idProyecto;

  return (
    <div className="offset-4 col-3 mb-4">
      <Link to={`/proyecto/${idProyecto}`}>
        <h3>{nombreProyecto}</h3>
      </Link>
      <p>Autor: {nombreAutor}</p>
    </div>
  );
}

export default ResumenProyecto;
