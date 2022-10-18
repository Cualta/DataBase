const express = require("express");
const infoRouter = require("./routes/students");
const app = express();
const bodyParser = require("body-parser");

app.use("/infoRouter", infoRouter);

app.use(bodyParser.urlencoded({ extended: true }));

const host = "localhost";
const port = 8000;

app.get("/", (req, res) => {
  //res.send("Hello world");
  const students = [
    {
      name: "Claudia",
      course: "DB",
      registerAt: Date.now(),
    },
  ];
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  //res.send("thanks" + req.body.name);
  var name = req.body.name;
  var course = req.body.course;
  res.send("Thanks " + name + ", you are now inscrit to  " + course);
});

app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`);
});
