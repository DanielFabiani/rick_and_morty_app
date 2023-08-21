const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    const { name, origin, status, image, species, gender } = req.body;

    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).send("Faltan datos");
    }

    await Favorite.findOrCreate({
      where: {
        name,
        origin,
        status,
        image,
        species,
        gender,
      },
    });

    const allFavorite = await Favorite.findAll()
    return res.status(200).json(allFavorite);

  } catch (error) {
    return res.status(500).json(error.message);
  }
};

module.exports = postFav;
