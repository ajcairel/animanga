const express = require("express");
const router = express.Router();
const imageCtrl = require("../../controllers/api/icon");

router.get("/image", imageCtrl.getImage);

module.exports = router;
