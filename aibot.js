function connect_db(){
let conn_ai = eval(process.env.BOT_AIDB);
return { 'cache-control': conn_ai[0], 'x-apikey': conn_ai[1], 'content-type': conn_ai[2] };
}

exports.message = function ( content,author ){
  var options = { method: 'GET', url: process.env.BOT_AIDBPATH, headers: connect_db() };
  var request = require("request");
		request(options, function (error, response, body) {
		if (error) throw new Error(error);
  eval(body).forEach(function(question){
	  var re = new RegExp(question.pergunta,'gi');
	  if(content.match(re)){
		var args = eval(question.respostas);
		if(question.cond && question.cond.length > 0){eval(question.cond);console.log(sek);}    
	  }
  });  
		});
  return "No momento não estou programada para responder a isto " + author.username + ". x3";
}
