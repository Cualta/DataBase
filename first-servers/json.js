// see the tutorial at
// https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module
const http = require("http");

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  //function to return the appropriate header all JSON
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(`{"message": "This is a JSON response"}`); //This time in the response.end() call, our string argument contains valid JSON.
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
