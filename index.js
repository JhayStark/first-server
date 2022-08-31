// const express = require('express');

// const app = express();

// app.listen(4000 ,(err)=>{
//     console.log(" Server listening on http://localhost:4000");
// })

const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("middleware starts");
  next();
  console.log("middleware stops");
});

app.get("/", (req, res) => {
  console.log("request reached");
  res.status(200).send("🚀hello world welcome to my server ");
});

app.post("/", (req, res) => {
  res.status(201).send("Your data has been  saved");
});

app.put("/", (req, res) => {
  res.status(200).send("Your data has been replaced ");
});

app.patch("/", (req, res) => {
  res.status(200).send("Your data has been updated");
});

app.delete("/", (req, res) => {
  res.status(200).send("Your data has been deleted ");
});

app.listen(4000, (err) => {
  console.log(" Server listening on http://localhost:4000");
});
