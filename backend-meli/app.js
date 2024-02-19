const express = require('express');
const cors = require('cors');
require('dotenv').config();

const registerApiRouter = require("./components");

const app = express();

// Procesador datos json del body
app.use(express.json());

app.use(cors());

// Directorio Público
app.use(express.static('public'));

// Rutas
registerApiRouter(app);

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log('Test práctico Backend corriendo en el puerto 4000')
});

module.exports = app;