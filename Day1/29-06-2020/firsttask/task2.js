const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
fs.readdir("/Users/Dharaneeswari/Desktop/firsttask", (err, files) => {
  app.get("/data", (req, res) => {
    if (err) throw err;
    res.send(files);
  });
});
app.listen(port, () => {
  console.log("welcome NodeJS");
});
