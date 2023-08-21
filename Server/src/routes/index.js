// para crear las rutas importamos todos los controladores

const express = require('express');
const getCharById = require('../controllers/getCharById');
const postUser = require('../controllers/postUser');
const login = require('../controllers/login');
const postFav = require('../controllers/postFav.js');
const deleteFav = require('../controllers/deleteFav');
const router = express.Router();

router.get('/login', login)
router.post('/login', postUser)
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)
router.get('/character/:id', getCharById)

module.exports = router;
