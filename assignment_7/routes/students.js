const express = require("express");

const router = express.Router();

router.get("/students", (req, res) => {
  res.send("students");
  //res.sendFile("./index.html");
});

module.exports = router;
