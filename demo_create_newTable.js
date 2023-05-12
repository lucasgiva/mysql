var mysql = require('mysql2')
var sql = "CREATE TABLE customers(id int AUTO_INCREMENT PRIMARY KEY, name varchar(255), address varchar(255))"; 


var con = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "root",
    database: "mydb"
}) 

con.connect(function(err){
    if(err) throw err; 
    console.log("Connected")

    con.query(sql, function(err, result){
        if(err) throw err; 
        console.log("Tabela criada")

    })
})


