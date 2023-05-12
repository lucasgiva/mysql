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

    con.query("delete from clientes where endereço = 'Mountain 21'", function(err, result){
        if(err) throw err; 
        console.log("Registro excluido: " + result.affectedRows);

    })
})

