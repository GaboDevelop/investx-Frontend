import React from "react";
import "./styles/Login.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid home">
        <div className="row">
          <div className="offset-1 col-5 p-4 mr-2 contenedor-registro">
            <h2>Registro</h2>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    placeholder="Correo"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="nombre">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Nombre"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="nombre2">Segundo Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre2"
                    placeholder="Segundo Nombre"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail4">Apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    placeholder="Apellido"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label for="inputPassword4">Segundo apellido</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido2"
                    placeholder="Segundo Apellido"
                  />
                </div>
              </div>

              <button type="submit" class="btn btn-primary">
                Registrar
              </button>
            </form>
          </div>

          <div className="col-5 p-4 contenedor-registro">
            <h2>Inicio de Sesión</h2>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
