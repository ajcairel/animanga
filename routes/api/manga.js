const express = require('express');
const router = express.Router();
const mangaCtrl = require('../../controllers/api/manga');
// require the authorization middleware function
const ensureLoggedIn = require ('../../config/ensureLoggedIn');

// POST /api/anime/add
router.post('/add', mangaCtrl.addManga);
// GET /api/anime/all
// router.get('/all', ensureLoggedIn, mangaCtrl.getAllManga);
router.get('/all', mangaCtrl.getAllManga);

router.post('/profile/user', mangaCtrl.getProfileManga);

router.post('/check', mangaCtrl.isAdded);

// FIX THIS
router.post('/search', mangaCtrl.search);

router.put('/remove', mangaCtrl.removeManga);

router.get('/top', mangaCtrl.getTop);

router.post('/manId/details', mangaCtrl.getDetails);



module.exports = router;