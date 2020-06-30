const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());
var createRoom = [],
  room = [];
app.post("/createRoom", (req, res) => {
  createRoom.push(req.body);
  res.json({ request: "received" });
});
app.post("/room", (req, res) => {
  room.push(req.body);
  res.json({ request: "post received" });
});
app.get("/bookedData", (req, res) => {
  let details = room.map((data) => {
    return {
      Room_ID: data.Room_ID,
      booked_Stated: "Booked",
      customer_name: data.Customer_Name,
      Date: data.Date,
      Start_Time: data.Start_Time,
      End_Time: data.End_Time,
    };
  });
  console.log(details);
  res.json(details);
});
app.get("/customersData", (req, res) => {
  let information = room.map((data) => {
    return { customer_name: data.Customer_Name, Room_ID: data.Room_ID };
  });
  res.json(information);
});
app.listen(process.env.PORT || port, () => {
  console.log("welcome to Meeting Hall Booking");
});
