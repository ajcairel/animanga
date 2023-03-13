const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
// require the authorization middleware function
// sends them to /
const ensureLoggedIn = require("../../config/ensureLoggedIn");


router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

router.post("/", usersCtrl.create);

router.post("/login", usersCtrl.login);

router.get("/users", usersCtrl.getUsers);

router.post("/profile/user", usersCtrl.getProfileUser);

module.exports = router;
