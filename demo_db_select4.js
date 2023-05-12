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

    con.query("select nome, endereço from clientes where endereço like 'S%'", function(err, result){
        if(err) throw err; 
        console.log(result);

    })
})

