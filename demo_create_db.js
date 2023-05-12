var mysql = require("mysql2")
var criarDB = "create database mydb"; 

var con = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "root"
})

con.connect(function(err){
    if(err) throw err; 
    console.log("Connected")

    con.query(criarDB, function(err, result){
        if(err) throw err; 
        console.log("Database criado")
    })
})

