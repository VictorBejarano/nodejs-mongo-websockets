const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const response = require("./network/response");

var app = express(); // Inicializa express

app.use(bodyParser.json());
app.use(router);

// app.use("/", function (req, res) {
//   res.send("Hola");
// });

router.get("/", function (req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  response.success(req, res, 'Lista de mensajes');
});

router.post("/", function (req, res) {
  console.log(req.query);
  console.log(req.body);

  response.success(req, res, 'Creado correctamente');
});

router.delete("/", function (req, res) {
  console.log(req.query);
  console.log(req.body);
  response.error(req, res, 'No se encuentra');
});

app.use('/app', express.static('public'))

app.listen(3000);
console.log(`La aplicacion esta escuchando en http://localhost:3000`);
