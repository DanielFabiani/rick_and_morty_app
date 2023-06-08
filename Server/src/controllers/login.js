const users = require('../utils/users.js')


module.exports = (req, res) => {
  // recibe desde el objeto res.query
  const { email, password } = req.query;
  let access = false;

// evaluamos si el email y el password que viene del front coinciden
  users.forEach(user => {
    if (user.email === email && user.password === password) {
      access = true;
    }
  })
  return res.status(200).json({ access }); // con las llaves convertimos access con su valor a objeto
}