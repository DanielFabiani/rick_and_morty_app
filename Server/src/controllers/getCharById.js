const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = (req, res) => {
  const { id } = req.params; //? params indica el id de la url recibido por el usuario
  axios
  // hace una petición a la url y se le suma el id
    .get(URL + id) // trae response.data
    // retorna una promesa
    .then((response) => {
      // se desestructura el objeto response.data
      const { status, name, species, origin, gender, image } = response.data;
      // se crea el objeto character
      const character = { id, status, name, species, origin, gender, image };

    // Condiciono que estamos retornando
      return name
        ? res.status(200).json(character)
        :res.status(404).send("Not found")
      /* if (character.name) return res.status(200).json(character);
      else return res.status(404).send("Not found"); */
    })
    .catch(error => {
      return res.status(500).send(error.message)
    })
};

module.exports = getCharById;

// controlador Get con vanilla
/* 
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
 */
