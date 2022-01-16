const express = require("express");
const app = express();
const port = 5000;
const db = require("./model/helper");

app.get("/", (req, res) => {
  db("select * from contacts;")
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
