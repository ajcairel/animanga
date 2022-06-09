const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
// require the authorization middleware function
const ensureLoggedIn = require ('../../config/ensureLoggedIn');


// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);

router.get('/users', usersCtrl.getUsers);

router.post('/profile/user', usersCtrl.getProfileUser);

module.exports = router;