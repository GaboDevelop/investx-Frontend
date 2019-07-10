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
                <div className="form-group col-md-12">
                  <h3>
                    Justificacion de la unidad de estudio de Investigacion
                  </h3>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">
                    ¿Cual es la curiosidad o preocupación?(1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">
                    ¿Hay contradicciones? Expliquelas(1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">
                    ¿Cuales fueron sus motivaciones o intereses?(1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">
                    Explique la potencialidad(1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPassword4">¿Que necesidad hubo?(1)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">
                    Explique que tendencia tuvo su unidad de estudio(1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-md-12">
                  <label for="inputPassword4">
                    ¿Cual fue la oportunidad?(1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-md-12">
                  <h3>Datos para su Unidad informativa</h3>
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">
                    ¿Cual fue la idea principal del proyecto?
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">
                    Por favor cite el contenido donde reflejo su idea(1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">
                    Coloque los datos de referencia al autor dado(1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group col-12">
                  <label for="inputPassword4">
                    Diga en que categoria esta ubicada esta unidad
                    informativa(1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-12">
                  <div className="">
                    <h3>Datos sobre el abordaje de la investigación</h3>
                  </div>
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">
                    ¿Como fue tu interpretacion o perspectiva?(1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">
                    Explique la estructura previa (1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">
                    ¿Cual fue el grado de participacion? (1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-12">
                  <h3>Datos sobre el fundamento proyectivo</h3>
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">explique su fundamento(1)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">
                    ¿Que tecnica de analisis se uso? (1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">Describa el analisis (1)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">Explique el proceso (1)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">Describa el evento (1)</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">
                    ¿Cual fue el aspecto legal? (1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">
                    ¿Cual fue el efecto a lograr? (1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">
                    Describa el programa alternativo (1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-4">
                  <label for="inputPassword4">
                    ¿Cual fue su prediccion? (1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-12">
                  <label for="inputPassword4">
                    Explique las comparaciones (1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    placeholder=""
                  />
                </div>
                <div className="form-group col-12">
                  <h3>Infomación final del proyecto</h3>
                </div>
                <div className="form-group col-12">
                  <label for="inputPassword4">
                    ¿Cual es el objetivo general? (1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    pla
                  />
                </div>
                <div className="form-group col-12">
                  <label for="inputPassword4">
                    ¿Cual es el objetivo general? (1)(1)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    pla
                  />
                </div>
                <div className="form-group col-12">
                  <label for="inputPassword4">
                    ¿Cual es el objetivo general? (1)(2)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    pla
                  />
                </div>
                <div className="form-group col-12">
                  <label for="inputPassword4">
                    ¿Cual es el objetivo especifico? (1)(3)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputPassword4"
                    pla
                  />
                </div>
              </div>

              <div className="offset-1 col-10 separador" />

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
