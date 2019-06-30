import React from "react";

import "./styles/CardDeveloper.css";
// Aprende más del Gravatar en: http://gravatar.com
function CardDeveloper(props) {
  const name = props.name;
  const github = props.github;

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Estudiante Ingenieria en Informatica UCAB</p>
        </div>
      </div>
    </div>
  );
}

export default CardDeveloper;
