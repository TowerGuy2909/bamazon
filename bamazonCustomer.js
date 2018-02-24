var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "greatBay_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function query goodsList(){
   inquirer
    .prompt({
      name: "forSale",
      type: "rawlist",
      message: "what aisle would you like to purchase today?",
      choices: ["MEAT", "DAIRY", "PRODUCE", "REFRIDGERATOR", "REGISTER"]
    })
    .then(function(answer) {
      if (answer.forSale.toUpperCase() === "MEAT") {
        meatAisle();
      }
      else if (answer.forSale.toUpperCase() === "DAIRY"){
        dairyAisle();
      }
      else if (answer.forSale.toUpperCase() === "PRODUCE"){
        produceAisle();
      }
      else if (answer.forSale.toUpperCase() === "REFRIDGERATOR"){
        refridgeratorAisle();
      }
      else if (answer.forSale.toUpperCase() === "REGISTER"){
        registerAisle();
      } else {

      }
    });
}
function queryMeatAisle(){
  var query = connection.query("SELECT * FROM products WHERE = department_name? ["MEAT"],
    function (err, res){
      for (var i = 0; i < res.length; i++){
        console.log( + "|"res[i].product_name );
        function quantity();
      }
    })
}
function dairyAisle(){
  var query = connection.query("SELECT * FROM products WHERE = department_name? ["DAIRY"],
    function (err, res){
      for (var i = 0; i < res.length; i++){
        console.log( + "|"res[i].product_name );
        function quantity();
      }
    })
}
function produceAisle(){
  var query = connection.query("SELECT * FROM products WHERE = department_name? ["PRODUCE"],
    function (err, res){
      for (var i = 0; i < res.length; i++){
        console.log( + "|"res[i].product_name );
        function quantity();
      }
    })
}
function refridgeratorAisle(){
  var query = connection.query("SELECT * FROM products WHERE = department_name? ["REFRIDGERATOR"],
    function (err, res){
      for (var i = 0; i < res.length; i++){
        console.log( + "|"res[i].product_name );
        function quantity();
      }
    })
}
function registerAisle(){
  var query = connection.query("SELECT * FROM products WHERE = department_name? ["REGISTER"],
    function (err, res){
      for (var i = 0; i < res.length; i++){
        console.log( + "|"res[i].product_name );
        function quantity();
      }
    })
}
.then(function(answer) {
      connection.query(

function quantity(){
   inquirer
    .prompt({
      name: "forSale",
      type: "rawlist",
      message: "what aisle would you like to purchase today?",
      choices: ["MEAT", "DAIRY", "PRODUCE", "REFRIDGERATOR", "REGISTER"]
    })
    .then(function(answer) {
      if () {
     
      } else {

      }
    });
}





