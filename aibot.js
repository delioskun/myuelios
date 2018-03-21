function connect_db(){
let conn_ai = eval(process.env.BOT_AIDB);
return { 'cache-control': conn_ai[0], 'x-apikey': conn_ai[1], 'content-type': conn_ai[2] };
}

exports.message = function ( content,author ){	
  var options = { method: 'GET', url: process.env.BOT_AIDBPATH, headers: connect_db() };
  var request = require("request");var i = 0;
		request(options, function (error, response, body) {
		if (error) throw new Error(error);
		do{
		if(i == 2){bcb("olá!");return;}
		i++;
		}
		while(i < 5);	
		bcb("teste"); 	
		});
}
