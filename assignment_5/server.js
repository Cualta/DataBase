// source https://www.youtube.com/watch?v=4fWWn2Pe2Mk

// libraries
const http = require("http"); // for serving HTTP requests
const fs = require("fs").promises; // for reading files
const qs = require("querystring"); // for parsing form fields from POST

const db = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// server setup
const host = "localhost"; // if you HAVE a publicly accessible domain, feel free to use that
const port = 8080; // if you pick an unavailable port, you get an error

//validate mysql connection to retrive data
var mysqlConnection = db.createConnection({
  host: "localhost",
  user: "root",
  password: "o123CH78$",
  database: "cats",
});

mysqlConnection.connect((error) => {
  if (!error) console.log("DB connection succeded");
  else
    console.log(
      "DB connection failed \n Error : " + JSON.stringify(error, undefined, 2)
    );
});

const requestListener = function (req, res) {
  switch (req.url) {
    case "/insert":
      break;
    case "/cats":
      var listing = "<html><body>";
      mysqlConnection.query("SELECT * FROM cats", (err, matches) => {
        if (err) {
          return console.error(err.message);
        }
        matches.forEach(function (row) {
          listing += row.CatName + "<br>";
        });
        res.writeHead(200);
        listing += "</body></html>";
        res.end(listing);
        console.log("list");
      });
      break;
    default:
      console.log("form");
  }
};

const server = http.createServer(requestListener);
//app.listen(port, host, () => {
server.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`);
});

// view the cats in the database
/* app.get("/cats", (req, res) => {
  var listing = "<html><body>";
  mysqlConnection.query("SELECT * FROM cats", (err, matches) => {
    if (err) {
      return console.error(err.message);
    }
    matches.forEach(function (row) {
      listing += row.CatName + "<br>";
    });
    res.writeHead(200);
    listing += "</body></html>";
    res.end(listing);
    console.log("list");
  });
}); */
