const express = require("express");

var app = express(); // Inicializa express

app.use("/", function (req, res) {
  res.send("Hola");
});

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
