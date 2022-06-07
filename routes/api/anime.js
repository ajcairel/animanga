const express = require('express');
const router = express.Router();
const animeCtrl = require('../../controllers/api/anime');
// require the authorization middleware function
const ensureLoggedIn = require ('../../config/ensureLoggedIn');

// POST /api/anime
router.post('/add', animeCtrl.createAnime);
// GET /api/anime
router.get('/all', animeCtrl.getAllAnime);


module.exports = router;