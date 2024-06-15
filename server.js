const http = require("http");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname + "/dist/firebase-personal"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/firebase-personal/index.html"));
});

// Replace the 'backend' string with your App name (same as dist/<appname>)
//app.listen(process.env.PORT || 8080);

const port = process.env.PORT || 1337;
app.listen(port);

console.log(`Server running at http://localhost:${port}`);
