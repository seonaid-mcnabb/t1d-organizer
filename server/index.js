const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    //You can call your database here :) 
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
