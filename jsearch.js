var request = require('request');
var cheerio = require('cheerio');

exports.elwiki = function ( bQuery, bPage, bCb ){
	if( arguments.length===3 ){ 	
		if( typeof(arguments[1])=="number" && typeof(arguments[2])=="function" ){
			request('https://www.bing.com/search?q=' + arguments[0], function (error, response, html) {
			process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
			console.log(error);
 		 if (!error && response.statusCode == 200) { bCb(html.match('(http|https)\:\/\/elwiki.net\/(.*?)(?=")/gi')); }
	});
		}else{
			bCb("Argument type error!");
		}
	}else{
		bCb("Function argument missed!");
	}
}

