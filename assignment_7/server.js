const express = require("express");
//const infoRouter = require("./routes/students");
const app = express();
const { MongoClient } = require("mongodb");
const fs = require("fs").promises;

const bodyParser = require("body-parser");
const { mongo } = require("mongoose");

//app.use("/infoRouter", infoRouter);

app.use(bodyParser.json());
const url = "mongodb://localhost:27017/school";
const client = new MongoClient(url);

const host = "localhost";
const port = 8000;

const dbName = "school";

//connect with MongoDB

const startConnection = () => {
  client
    .connect()
    .then((client) => client.db(dbName).listCollections().toArray())
    .then((collections) => {
      console.log("you collections are");
      collections.forEach((collection) => console.log(collection.name));
    });
};

const endDBConnection = () => {
  console.log("end db connection");
  db.close();
};
startConnection();
app.get("/", (req, res) => {
  //res.send("Hello world");

  const std = client.db(dbName).collection("courses");
  const result = std.find({});
  result.toArray((error, itm) => {
    console.log("test", itm);
    console.log("error", error);
    res.json(itm);
  });
  //res.sendFile(__dirname + "/index.html");
});

app.get("/students", (req, res) => {
  res.send("students");
  //res.sendFile("./index.html");
});

// app.post("/", (req, res) => {
//   //res.send("thanks" + req.body.name);
//   var name = req.body.name;
//   var course = req.body.course;
//   res.send("Thanks " + name + ", you are now inscrit to  " + course);
// });

app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`);
});
