
const http = require("http");
const { log } = require("console");
const getCharacterById = require('./controllers/getCharacterById')

const PORT = 3001;

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); //* permite al front acceder al back

  if(req.url.includes('/rickandmorty/character')) {
    const id = req.url.split('/').pop();
    getCharacterById(res, id)
  }
})

server.listen(PORT, 'localhost')