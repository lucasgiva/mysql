var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "mydb"
});

con.connect(function(err){
    if(err) throw err; 
    console.log("Connected")
    var sql = "insert into clientes (nome, endereço) values('Juca', 'blue village 1')"
    con.query(sql, function(err, result){
        if(err) throw err; 
        console.log("1 registro inserido: " + result.insertId );

    })
})

