const express = require('express');
const router = express.Router();
const mangaCtrl = require('../../controllers/api/manga');
// require the authorization middleware function
const ensureLoggedIn = require ('../../config/ensureLoggedIn');

// POST /api/anime/add
router.post('/add', mangaCtrl.createManga);
// GET /api/anime/all
router.get('/all', mangaCtrl.getAllManga);
// FIX THIS
router.post('/search', mangaCtrl.search);

router.put('/remove', mangaCtrl.removeManga);

router.get('/top', mangaCtrl.getTop);


module.exports = router;