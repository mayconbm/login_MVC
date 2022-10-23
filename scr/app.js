const express = require("express");
const routes = require("./routers");
const db = require('./database');
const handleError = require("./middlewares/handleError");

const app = express();

db.hasConection()

app.use(express.json());

app.use(routes);

app.use(handleError);

app.listen(3000, () => console.log("Servidor, porta 3000."));