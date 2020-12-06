const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

//to get the body from post request
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
//to get body from json requests
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/hello", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname + "/form.html"));
});

app.post("/formdata", (req, res) => {
  console.log("form :", req.body);
  res.status(200).render("formdata", req.body);
});

/**
 *  { 
    "fname": "Ahmad",
     "lname": "Alaziz",
    "maritalStatus": "s" 
    }
 *
 *  maritalStatus can be r,s, or o... (relationship, single, other)
 */
app.post("/jsondata", (req, res) => {
  res.status(200).render("formdata", req.body);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
