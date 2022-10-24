const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const fs = require("fs").promises;

const bodyParser = require("body-parser");

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

//GET all courses
app.get("/courses", (req, res) => {
  const courses = client.db(dbName).collection("courses");
  const result = courses.find({ title: "Webdev 101" });
  result.toArray((error, item) => {
    console.log("test", item);
    console.log("error", error);
    res.json(item);
  });
});

//GET one course
app.get("/courses/course", (req, res) => {
  //res.send("Hello world");

  const course = client.db(dbName).collection("courses");
  const result = course.find({ title: "Webdev 101" });
  result.toArray((error, item) => {
    console.log("test", item);
    console.log("error", error);
    res.json(item);
  });
  //res.sendFile(__dirname + "/index.html");
});

app.get("/students/new_student", (req, res) => {
  //res.send("Hello world");
  var myobj = {
    title: "CSS Libraries",
    teacher: "Claudia",
    weekday: "Friday",
    topics: ["Bootstrap", "md4"],
  };

  const student = client.db(dbName).collection("students");
  const result = student.insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });

  //console.log("result", result);
  res.send("1 student has inserted");
});

app.get("/students/student", (req, res) => {
  //res.send("Hello world");

  const student = client.db(dbName).collection("students");
  const result = student.find({ name: "Nefer" });
  result.toArray((error, item) => {
    console.log("test", item);
    console.log("error", error);
    res.send("hello" + result);
  });
});

app.get("/students", (req, res) => {
  const std = client.db(dbName).collection("courses");
  const result = std.find({ title: "Webdev 101" });
  result.toArray((error, itm) => {
    console.log("test", itm);
    console.log("error", error);
    res.json(itm);
  });
});

app.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`);
});

// app.post("/", (req, res) => {
//   //res.send("thanks" + req.body.name);
//   var name = req.body.name;
//   var course = req.body.course;
//   res.send("Thanks " + name + ", you are now inscrit to  " + course);
// });
