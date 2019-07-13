const router = require("express").Router();
const rootController = require("../controllers/root.controller");

router.get("/", rootController.greeting);

module.exports = router;
