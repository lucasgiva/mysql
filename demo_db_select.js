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

    con.query("select * from clientes", function(err, result){
        if(err) throw err; 
        console.log(result);

    })
})

