var mysql = require('mysql2')
var criaTB = "CREATE TABLE clientes(id int AUTO_INCREMENT PRIMARY KEY, nome varchar(255), endereço varchar(255))"; 


var con = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "root",
    database: "mydb"
}) 

con.connect(function(err){
    if(err) throw err; 
    console.log("Connected")

    con.query(criaTB, function(err, result){
        if(err) throw err; 
        console.log("Tabela criada")

    })
})


