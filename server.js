const express = require("express");
const router = express.Router();

var app = express(); // Inicializa express

app.use(router);

// app.use("/", function (req, res) {
//   res.send("Hola");
// });



router.get('/', function (req, res) {
    res.send("Hola desde GET");
})

router.post('/', function (req, res) {
    res.send("Hola desde POST");
})

app.listen(3000);
console.log("La aplicacion esta escuchando en http://localhost:3000");
