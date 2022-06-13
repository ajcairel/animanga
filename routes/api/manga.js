const express = require("express");
const router = express.Router();
const mangaCtrl = require("../../controllers/api/manga");
// require the authorization middleware function
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/all", mangaCtrl.getAllManga);

router.get("/top", mangaCtrl.getTop);

router.post("/add", mangaCtrl.addManga);

router.post("/profile/user", mangaCtrl.getProfileManga);

router.post("/check", mangaCtrl.isAdded);

router.post("/search", mangaCtrl.search);

router.post("/manId/details", mangaCtrl.getDetails);

router.put("/remove", mangaCtrl.removeManga);

module.exports = router;
