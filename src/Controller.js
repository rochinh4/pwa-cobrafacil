//Constantes
const express = require("express");
const bodyParser = require("body-parser");

const cors = require("cors");

let app = express();
app.use(cors());
app.user(bodyParser.urlencoded({ extended: false }));
app.user(bodyParser.json());

let port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log("Servidor Rodando");
});
