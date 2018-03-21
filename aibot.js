function connect_db(){
let conn_ai = eval(process.env.BOT_AIDB);
return { 'cache-control': conn_ai[0], 'x-apikey': conn_ai[1], 'content-type': conn_ai[2] };
}

exports.message = function ( content,author,bcb ){	
  var options = { method: 'GET', url: process.env.BOT_AIDBPATH, headers: connect_db() };
  var request = require("request");var i = 0;
		request(options, function (error, response, body) {
		var size = eval(body).length;var i = 0;
		do{
		var re = new RegExp(eval(body)[i].pergunta,'gi');	
	  	if(content.match(re)){
		var args = eval(eval(body)[i].respostas);	
		if(eval(body)[i].site_auxiliar != "nenhum"){
		var url = String(eval(body)[i].site_auxiliar);
		request(url, function (err, resp, bd) {		
		if(error){bcb("Aconteceu algo de errado nos meus sensores. Tente novamente.");return;}
		request(resp.request.uri.href, function (a, b, c) {
		console.log(c);	
		if(eval(body)[i].cond && eval(body)[i].cond.length > 0){eval(eval(body)[i].cond); bcb(eval(sek)); return;}	
		});	
		});	
		}
		if(eval(body)[i].cond && eval(body)[i].cond.length > 0){eval(eval(body)[i].cond); bcb(eval(sek)); return;}
		}
		i++;	
		}
		while(i < size);
		if(author.username != "Myu"){	
		bcb("No momento não estou programada para responder a isto " + author.username + ". x3");
		}
		});
}
