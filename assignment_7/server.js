const express = require("express");
const infoRouter = require("./routes/students");
const app = express();

app.use("/infoRouter", infoRouter);

const host = "localhost";
const port = 8080;

app.get("/", function (req, res) {
  //res.send("Hello world");
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`);
});
