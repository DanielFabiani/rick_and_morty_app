//Servidor con express
const express = require("express");
const router = require("./routes/index");
const morgan = require("morgan");
const server = express();
const PORT = 3001;
// Importo instancia de 'sequelize'
const { conn } = require('./DB_connection');

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
server.use(express.json());
server.use(morgan('dev'))

//? este middleware crea los path de las rutas que se soliciten y ejecuta la función creada en el archivo router.js
server.use('/rickandmorty', router)

//! una vez terminado el desarrollo cambiar a {force: false}
conn.sync({force: true})
  .then(() => {
    server.listen(PORT, () => {
      console.log("Server listening on port: " + PORT);
    });
  })
  .catch((error) => { console.log(error.message);})


// Servidor js Vanilla
/* 
const http = require("http");
const { log } = require("console");
const getCharacterById = require('./controllers/getCharacterById')

const PORT = 3001;

const server = http.createServer((req, res) => {
//* permite al front acceder al back
  res.setHeader('Access-Control-Allow-Origin', '*'); 

  if(req.url.includes('/rickandmorty/character')) {
    const id = req.url.split('/').pop();
    getCharacterById(res, id)
  }
})

server.listen(PORT, 'localhost')
 */
