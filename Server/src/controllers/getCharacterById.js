
const axios = require('axios');

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
      const character = {
        id: data.id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin,
        image: data.image,
        status: data.status
      }
      res
        .writeHead(200, { 'Content-Type': 'application/json' })
        .end(JSON.stringify(character))
    })
    .catch(error => {
      res
        .writeHead(500, { 'Content-Type': 'text/plain' })
        .end(error.message)
    })
}

module.exports = getCharById;