const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");

router.get("/", appController.getIndex);
router.get("/new", appController.getForm);
router.post("/new", appController.postForm);
router.get("/message/:messageId", appController.viewMessage);

module.exports = router;
