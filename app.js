var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.send("Welcome!");
});

app.get("/hi", function(req, res) {
   res.send("Hare Krishna!!"); 
});

app.get("/bye", function(req, res) {
   res.send("Hare Rama!!"); 
   console.log("Somebody said bye..");
});

app.get("/r/:name", function(req, res) {
  res.send("Hi " + req.params.name + ". What's up?");  
});

app.get("/r/:name/:role", function(req, res) {
  res.send("Who is " + req.params.name + "? " + req.params.name + " is a " + req.params.role + ".");
});

app.get("/r/:name/:role/:company", function(req, res) {
  res.send("In which company is " + req.params.name + " " + req.params.role + " ?" + " In " + req.params.company.toUpperCase() + ".");
});

app.get("*", function(req, res) {
   res.send("*You are a Star*");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started..");
});