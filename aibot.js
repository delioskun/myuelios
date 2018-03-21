function connect_db(){
let conn_ai = eval(process.env.BOT_AIDB);
return { 'cache-control': conn_ai[0], 'x-apikey': conn_ai[1], 'content-type': conn_ai[2] };
}

exports.message = function ( content,author ){	
  var options = { method: 'GET', url: process.env.BOT_AIDBPATH, headers: connect_db() };
  var request = require("request");
		request(options, function (error, response, body) {
		if (error) throw new Error(error);
		var size = eval(body).length;
		var replie_dft = true;	
		for(i=0;i < size;i++){	
		var re = new RegExp(eval(body)[i].pergunta,'gi');	
	  	if(content.match(re)){
		var args = eval(eval(body)[i].respostas);	
		if(eval(body)[i].cond && eval(body)[i].cond.length > 0){eval(eval(body)[i].cond); replie_dft = false; return eval(sek); break;}}
		}
		if(replie_dft){ return "No momento não estou programada para responder a isto " + author.username + ". x3"; }	
		});
}
