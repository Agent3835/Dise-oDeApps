/** @format */

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "requests",
});

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos:", err);
    return;
  }
  console.log("Conexión a la base de datos MySQL establecida");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM usuarios WHERE nickname = ? AND password = ?";

  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Error al realizar la consulta:", err);
      res.status(500).json({ error: "Error interno del servidor" });
      return;
    }

    if (results.length === 0) {
      res.status(401).json({ error: "Credenciales inválidas" });
      return;
    }

    res.json({ message: "Inicio de sesión exitoso" });
  });
});

app.listen(port, () => {
  console.log(`Servidor backend escuchando en http://localhost:${port}`);
});
