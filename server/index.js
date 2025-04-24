//importing dependencies to allow fetching and handling problems with CORS
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

//baically create new web server
const app = express();

app.use(cors()); // resolves issues with CORS

app.get("/api/random", async (req, res) => {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/today", async (req, res) => {
  try {
    const response = await fetch("https://zenquotes.io/api/today");
    const data = await response.json();
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/image", async (req, res) => {
  try {
    const response = await fetch("https://zenquotes.io/api/image");
    const buffer = await response.buffer();
    res.set("Content-Type", "image/jpeg");
    res.send(buffer);
  } catch (error) {
    console.log(error);
  }
});

//runs the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
