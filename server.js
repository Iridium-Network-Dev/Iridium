const http = require('http');
const createBareServer = require("@tomphttp/bare-server-node");
const server = http.createServer();
const express = require("express");
const bare = createBareServer("/bare/");
const app = express();

// serve your css as static
app.use(express.static(__dirname+"/static/"));


server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bare.shouldRoute(req)) {
    bare.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.listen({
  port: 8080,
});


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});
app.get("/index.html", (req, res) => {
  res.redirect('/');
});