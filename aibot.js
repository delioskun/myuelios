var mysql = require('mysql');

function connect_db(){
var con = mysql.createConnection({
  host: process.env.BOT_AIDB[0],
  user: process.env.BOT_AIDB[1],
  password: process.env.BOT_AIDB[2]
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});  
}

exports.message = function ( content,author ){
  connect_db();
  return "No momento não estou programada para responder a isto " + author.username + ". x3";
}
