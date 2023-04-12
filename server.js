const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

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
  res.send("Hola desde GET");
});

router.post("/", function (req, res) {
  console.log(req.query);
  console.log(req.body);

  res.send(
    `Hola desde POST, mensaje añadido correctamente ${req.query.message}`
  );
});

router.delete("/", function (req, res) {
  console.log(req.query);
  console.log(req.body);

  res.status(201).send([
    {
      error: "",
      body: "Creado correctamente",
    },
  ]);
});

app.listen(3000);
console.log(`La aplicacion esta escuchando en http://localhost:3000`);
