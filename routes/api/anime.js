const express = require('express');
const router = express.Router();
const animeCtrl = require('../../controllers/api/anime');
// require the authorization middleware function
const ensureLoggedIn = require ('../../config/ensureLoggedIn');

// POST /api/anime/add
router.post('/add', animeCtrl.createAnime);
// GET /api/anime/all
router.get('/all', animeCtrl.getAllAnime);
// FIX THIS
router.post('/search', animeCtrl.search);

router.put('/remove', animeCtrl.removeAnime);

router.get('/top', animeCtrl.getTop);

router.post('/aniId/details', animeCtrl.getDetails);


module.exports = router;