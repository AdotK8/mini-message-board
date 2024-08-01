const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");

router.get("/", appController.getIndex);
// router.get("/new", developmentController.getDevelopments);
module.exports = router;
