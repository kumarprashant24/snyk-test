/* eslint-disable no-undef */
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("heyy")
});


app.listen(5000, () => console.log("Server running at port", 5000));