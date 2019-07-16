const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const usuarioRoutes = require("./routes/api.js");

app.use(cors());

// configuracion
app.set("port", process.env.PORT || 4000);

//middlewares
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
//require("./routes")(app);
app.use("/api", usuarioRoutes);

// Iniciando servidor
app.listen(app.get("port"), () => {
  console.log(`Servidor express activo en el puerto: ${app.get("port")}`);
});
