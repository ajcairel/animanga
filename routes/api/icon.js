const express = require('express');
const router = express.Router();
const imageCtrl = require('../../controllers/api/icon');
// require the authorization middleware function


router.get('/image', imageCtrl.getImage);



module.exports = router;