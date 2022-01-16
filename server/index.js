const express = require("express");
const app = express();
const port = 5000;
const db = require("./model/helper");

//Added in these next lines to try to solve undefined object issue I was having with post method after running npm install --save body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//And it works!

//--> CONTACT DATABASE ROUTES ARE HERE <--//
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});

//This gets all of the contacts from the database
app.get("/contacts", (req, res) => {
  db("select * from contacts;")
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

//This adds a new contact to the list
app.post("/addcontact", (req, res) => {
  db(
    `INSERT INTO contacts (firstname, lastname, specialty, phonenumber, email, officename, notes) VALUES ("${req.body.firstname}", "${req.body.lastname}", "${req.body.specialty}","${req.body.phonenumber}","${req.body.email}", "${req.body.officename}","${req.body.notes}");`
  )
    .then((result) =>
      db("SELECT * FROM contacts;") //this is the MySql query
        .then((results) => {
          res.send(results.data);
        })
    )
    .catch((err) => res.status(500).send(err));
});

//This deletes a contact by id (given in URL param)
app.delete("/contacts/:id", (req, res) => {
  db(`DELETE FROM contacts WHERE id=${req.params.id}`)
    .then((result) => db("SELECT * FROM contacts;"))
    .then((results) => {
      res.send(results.data); //contact list is sent back as a response
    });
});

//This gets all of the appointments from the database
app.get("/appointments", (req, res) => {
  db("select * from appointments;")
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

//This gets all of the materials/prescriptions from the database
app.get("/materials", (req, res) => {
  db("select * from materials;")
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
