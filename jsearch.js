var request = require('request');
var cheerio = require('cheerio');

exports.elwiki = function ( bQuery, bPage, bCb ){
	if( arguments.length!=3 ){bCb("Function argument missed!");return;} 	
	if( typeof(arguments[1])!="number" && typeof(arguments[2])!="function" ){bCb("Argument type error!");return;}
	request('https://www.bing.com/search?q=' + arguments[0], function (error, response, html) {
	process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
	console.log(error);
 	if (!error && response.statusCode == 200) { bCb(html.match(/http(s|)\:\/\/(www.|)(\<strong\>|)elwiki\.net\/(.*?)(?=\")/gi)); }
	});
}

exports.forum = function ( bQuery, bPage, bCb ){
	if( arguments.length!=3 ){bCb("Function argument missed!");return;} 	
	if( typeof(arguments[1])!="number" && typeof(arguments[2])!="function" ){bCb("Argument type error!");return;}
	var url = String('http://sites.levelupgames.com.br/forum/elsword/search.php?do=process&query=' + bQuery + '&titleonly=1');
	request(url, function (error, response, body) {
  	console.log(response.request.uri.href);
	request(response.request.uri.href, function (a, b, c) {
	console.log(c.match(/showthread(.*?)(?=\;s)/gi));	
	});
	});	
}

exports.elspoiler = function ( bQuery, bPage, bCb ){
	if( arguments.length!=3 ){bCb("Function argument missed!");return;} 	
	if( typeof(arguments[1])!="number" && typeof(arguments[2])!="function" ){bCb("Argument type error!");return;}
}



