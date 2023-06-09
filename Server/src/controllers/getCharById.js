const URL = "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(URL + id) //? promesa
    const { status, name, species, origin, gender, image } = response.data;
    const character = { id, status, name, species, origin, gender, image };
    return name
      ? res.status(200).json(character)
      :res.status(404).send("Not found")

  } catch (error) {
    return res.status(500).send(error.message)
  }
};

module.exports = getCharById;
