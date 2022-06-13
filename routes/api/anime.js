const express = require("express");
const router = express.Router();
const animeCtrl = require("../../controllers/api/anime");
// require the authorization middleware function
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/all", animeCtrl.getAllAnime);

router.get("/top", animeCtrl.getTop);

router.get("/quote", animeCtrl.getQuote);

router.post("/add", animeCtrl.addAnime);

router.post("/profile/user", animeCtrl.getProfileAnime);

router.post("/check", animeCtrl.isAdded);

router.post("/search", animeCtrl.search);

router.post("/aniId/details", animeCtrl.getDetails);

router.put("/remove", animeCtrl.removeAnime);

module.exports = router;
