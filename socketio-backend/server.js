const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");

app.use(cors());
const server = http.createServer(app);

server.listen(3001, () => {
  console.log("Server running on port 3001");
});