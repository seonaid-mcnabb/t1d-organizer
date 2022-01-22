const express = require("express");
const app = express();
const port = 5000;
const db = require("./model/helper");
var cors = require("cors");

app.use(cors());

//Added in these next lines to try to solve undefined object issue I was having with post method
//after running npm install --save body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
//And it works!

//What shows up when you call the datbase for the first time
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

//Response when database is
app.get("/", (req, res) => {
  res.send("Welcome to the API");
});
//--> CONTACT DATABASE ROUTES ARE HERE <--//
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

//This gets a contact with a given id
app.get("/contacts/:id", (req, res) => {
  db(`select * from contacts where id=("${req.params.id}");`)
    .then((results) => res.send(results.data))
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

//--> APPOINTMENT DATABASE ROUTES ARE HERE <--//
//This gets all of the appointments from the database
app.get("/appointments", (req, res) => {
  db("select * from appointments;")
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

//This adds an appointment to the database
app.post("/appointment", (req, res) => {
  db(
    `INSERT INTO appointments(type, date, time, location, labwork, notes) VALUES ("${req.body.type}", "${req.body.date}", "${req.body.time}","${req.body.location}","${req.body.labwork}", "${req.body.notes}");`
  )
    .then((result) =>
      db("SELECT * FROM appointments;").then((results) => {
        res.send(results.data);
      })
    )
    .catch((err) => res.status(500).send(err));
});

//This deletes an appointment from the database
app.delete("/appointments/:id", (req, res) => {
  db(`DELETE FROM appointments WHERE id=${req.params.id}`)
    .then((result) => db("SELECT * FROM appointments;"))
    .then((results) => {
      res.send(results.data);
    });
});

//--> PRESCRIPTION / MATERIALS DATABASE ROUTES ARE HERE <--//
//This gets all of the materials/prescriptions from the database
app.get("/materials", (req, res) => {
  db("select * from materials;")
    .then((results) => res.send(results.data))
    .catch((err) => res.status(500).send(err));
});

//This adds a material / prescription to the database
app.post("/addmaterial", (req, res) => {
  db(
    `INSERT INTO materials(medname, datereceived, duration, ordermethod, notes) VALUES ("${req.body.medname}", "${req.body.datereceived}", "${req.body.duration}","${req.body.ordermethod}","${req.body.notes}");`
  )
    .then((result) =>
      db("SELECT * FROM materials;").then((results) => {
        res.send(results.data);
      })
    )
    .catch((err) => res.status(500).send(err));
});

//This deletes a material from the list
app.delete("/materials/:id", (req, res) => {
  db(`DELETE FROM materials WHERE id=${req.params.id}`)
    .then((result) => db("SELECT * FROM materials;"))
    .then((results) => {
      res.send(results.data);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
