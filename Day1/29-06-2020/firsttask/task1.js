const express = require("express");
const app = express();
const timestamp = require("time-stamp");
const fs = require("fs");
const port = 3000;
fs.writeFile(
  "date-time.txt",
  timestamp("YYYY / MM / DD : HH : mm : ss"),
  (err) => {
    if (err) throw err;
    console.log(timestamp("YYYY / MM / DD : HH : mm : ss"));
  }
);
app.get("/datetime", (req, res) => {
  res.send(timestamp("YYYY / MM / DD : HH : mm : ss"));
});
app.listen(port, () => {
  console.log("welcome NodeJS");
});
