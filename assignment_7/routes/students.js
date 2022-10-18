const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("students");
  //res.sendFile("./index.html");
});

module.exports = router;
