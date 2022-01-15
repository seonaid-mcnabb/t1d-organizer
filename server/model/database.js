require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "t1d",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  //TODO: Update what tables you wat here
  let sql =
    "DROP TABLE if exists contacts; CREATE TABLE contacts(id INT NOT NULL AUTO_INCREMENT, firstname VARCHAR(40) not null, lastname VARCHAR(40) not null, specialty VARCHAR(40) not null, phonenumber VARCHAR(40) not null, email VARCHAR(40) not null, officename VARCHAR(40) not null, notes VARCHAR(40) not null, PRIMARY KEY (id));";
  let sql2 =
    "DROP TABLE if exists appointments; CREATE TABLE appointments(id INT NOT NULL AUTO_INCREMENT, type VARCHAR(40) not null, date VARCHAR(40) not null, time VARCHAR(40) not null, location VARCHAR(40) not null, labwork VARCHAR(40) not null, notes VARCHAR(40) not null, PRIMARY KEY (id));";
  let sql3 =
    "DROP TABLE if exists materials; CREATE TABLE materials (id INT NOT NULL AUTO_INCREMENT, medname VARCHAR(40) not null, datereceived VARCHAR(40) not null, duration VARCHAR(40) not null, ordermethod VARCHAR(40) not null, notes VARCHAR(40) not null, PRIMARY KEY (id));";

  con.query(sql, function (err, result) {
    if (err) throw err;

    console.log("Table creation was successful!");
    console.log("Closing...");
  });

  con.query(sql2, function (err, result) {
    if (err) throw err;

    console.log("Table creation was successful!");
    console.log("Closing...");
  });

  con.query(sql3, function (err, result) {
    if (err) throw err;

    console.log("Table creation was successful!");
    console.log("Closing...");
  });

  con.end();
});
