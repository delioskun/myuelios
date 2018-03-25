const isgd = require('isgd');

function connect_db(){
let conn_ai = eval(process.env.BOT_AIDB);
return { 'cache-control': conn_ai[0], 'x-apikey': conn_ai[1], 'content-type': conn_ai[2] };
}

exports.message = function ( content,author,bcb ){	
  var options = { method: 'GET', url: process.env.BOT_AIDBPATH, headers: connect_db() };
  var request = require("request");var i = 0;
		request(options, function (error, response, body) {
		var size = eval(body).length;var i = 0;var max_captch = "";var index_request = 0;
		do{
		var re = new RegExp(eval(body)[i].pergunta,'gi');	
	  	if(content.match(re)){ if(content.match(re)[0].length > max_captch.length){max_captch = content.match(re)[0];index_request = i;}}
		i++;	
		}
		while(i < size);
		var args = eval(eval(body)[index_request].respostas);	
		if(max_captch.length > 0 && eval(body)[index_request].cond && eval(body)[index_request].cond.length > 0){
			eval(eval(body)[index_request].cond); bcb(eval(sek)); return;}
		if(author.username != "Myu"){ bcb("No momento não estou programada para responder a isto " + author.username + ". x3");}
		});
}
