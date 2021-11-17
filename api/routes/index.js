const express = require("express");
const router = express.Router();

router.use("/api/v1/quotes", require("./quotes"));

module.exports = router;

