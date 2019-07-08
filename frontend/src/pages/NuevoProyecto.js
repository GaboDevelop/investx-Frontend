import React from "react";
import { Link } from "react-router-dom";
import "./styles/NuevoProyecto.css";

class NuevoProyecto extends React.Component {
  handleChange(e) {
    console.log(e);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row content-slider">
          <div className="offset-1 col-10 contenedor-formulario p-2">
            <h1 className="p-4">Nuevo Proyecto de Investigacion</h1>
            <form className="p-4">
              <div class="form-row">
                <div class="form-group col-md-4">
                  <label for="inputEmail4">Tema (Resumido)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group col-md-8">
                  <label for="inputPassword4">Tema Completo</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    ¿Cuál es la situación preocupante?
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  />
                </div>
              </div>
              <div class="form-group">
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    ¿Tiene conexión con otros temas? Explique
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="exampleFormControlSelect2">
                    Seleccione el tipo de investigación
                  </label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="exampleFormControlSelect2">
                    Seleccione el nivel de investigación
                  </label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-5">
                  <label for="inputState">
                    ¿Cuantas consecuencias cree que tiene su tema de
                    investigación?
                  </label>
                  <select
                    id="inputState"
                    class="form-control"
                    onChange={this.handleChange}
                  >
                    <option selected>Seleccione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div class="form-group col-md-7">
                  <div class="form-group">
                    <label for="inputPassword4">consecuencia 1</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputPassword4">consecuencia 2</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputPassword4">consecuencia 3</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputPassword4">consecuencia 4</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputPassword4">consecuencia 5</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputPassword4">consecuencia 6</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-5">
                  <label for="inputState">
                    ¿Cuantos involucrados hay en su investigación?
                  </label>
                  <select
                    id="inputState"
                    class="form-control"
                    onChange={this.handleChange}
                  >
                    <option selected>Seleccione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div class="form-group col-md-7">
                  <div class="form-group">
                    <label for="inputPassword4">Involucrado 1</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputPassword4">Involucrado 2</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputPassword4">Involucrado 3</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputPassword4">Involucrado 4</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputPassword4">Involucrado 5</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group">
                    <label for="inputPassword4">Involucrado 6</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputPassword4"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div className="col-12">
                  <h3>Condicion metodologica de la Investigacion</h3>
                </div>

                <div class="form-group col-md-3">
                  <label for="exampleFormControlSelect2">
                    ¿Hay poblacion accesible?
                  </label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <label for="exampleFormControlSelect2">
                    ¿El abordaje es posible?
                  </label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <label for="exampleFormControlSelect2">
                    ¿Se hicieron estudios previos?
                  </label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <label for="exampleFormControlSelect2">
                    ¿Hubo instrumento de medicion?
                  </label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div className="col-12">
                  <h3>Condicion Social de la Investigacion</h3>
                </div>

                <div class="form-group col-md-3">
                  <label for="exampleFormControlSelect2">
                    ¿Hubo contribución?
                  </label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <label for="exampleFormControlSelect2">¿Hay necesidad?</label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <label for="exampleFormControlSelect2">¿Hay aportes?</label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
                <div class="form-group col-md-3">
                  <label for="exampleFormControlSelect2">
                    ¿Tiene aplicación?
                  </label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div className="col-12">
                  <h3>Condicion Personal de la Investigacion</h3>
                </div>

                <div class="form-group col-md-2">
                  <label for="exampleFormControlSelect2">¿Tuvo recursos?</label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="exampleFormControlSelect2">
                    ¿Tuvo buenas expectativas?
                  </label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="exampleFormControlSelect2">
                    ¿Tenía conocimiento del area?
                  </label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
                <div class="form-group col-md-2">
                  <label for="exampleFormControlSelect2">
                    ¿tuvo accesoria u orientación?
                  </label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
                <div class="form-group col-md-4">
                  <label for="exampleFormControlSelect2">
                    ¿tuvo acceso a algun tipo de informacion extra?
                  </label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>Si</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="col-md-12">
                  <h3>
                    {" "}
                    Temporalidades, Contexto, Poblacion y Muestra de toda la
                    investigación (llene tantas temporalidades como contextos
                    uso){" "}
                  </h3>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">temporalidad(1)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Contexto(1)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Unidad de estudio(1)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Poblacion(1)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Muestra(1)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">
                    Tecnica de obtención de información(1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Evento(1)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Tipo de envento(1)</label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Disciplina(1)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Instrumento(1)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="offset-1 col-10 separador" />
                <div className="form-group col-md-4">
                  <label for="inputPassword4">temporalidad(2)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Contexto(2)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Unidad de estudio(2)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Poblacion(2)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Muestra(2)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">
                    Tecnica de obtención de información(2)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Evento(2)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Tipo de envento(2)</label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Disciplina(2)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Instrumento(2)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="offset-1 col-10 separador" />
                <div className="form-group col-md-4">
                  <label for="inputPassword4">temporalidad(3)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Contexto(3)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Unidad de estudio(3)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Poblacion(3)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Muestra(3)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">
                    Tecnica de obtención de información(3)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Evento(3)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Tipo de envento(3)</label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Disciplina(3)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Instrumento(3)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="offset-1 col-10 separador" />
                <div className="form-group col-md-4">
                  <label for="inputPassword4">temporalidad(4)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Contexto(4)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Unidad de estudio(4)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Poblacion(4)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Muestra(4)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">
                    Tecnica de obtención de información(4)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Evento(4)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Tipo de envento(4)</label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Disciplina(4)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Instrumento(4)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="offset-1 col-10 separador" />
                <div className="form-group col-md-4">
                  <label for="inputPassword4">temporalidad(5)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Contexto(5)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Unidad de estudio(5)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Poblacion(5)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">Muestra(5)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">
                    Tecnica de obtención de información(5)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Evento(5)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Tipo de envento(5)</label>
                  <select
                    multiple
                    class="form-control "
                    id="exampleFormControlSelect2"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Disciplina(5)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label for="inputPassword4">Instrumento(5)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="offset-1 col-10 separador" />
              </div>

              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NuevoProyecto;
