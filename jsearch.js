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
	var url = String('http://sites.levelupgames.com.br/forum/elsword/search.php?do=process&query=' + r_s(bQuery) + '&titleonly=1');
	request(url, function (error, response, body) {	
	if(error){return;}	
	request(response.request.uri.href, function (a, b, c) {
	var results_table = c.match(/showthread(.*?)(?=\;s)/gi);
	var results_table = results_table.filter(function(k){ if(!k.toLowerCase().match(/(c|v|t)\-gt/g)){return k;} });		
	if(results_table.length > 0){bCb(results_table);}	
	});
	});	
}

exports.elspoiler = function ( bQuery, bPage, bCb ){
	if( arguments.length!=3 ){bCb("Function argument missed!");return;} 	
	if( typeof(arguments[1])!="number" && typeof(arguments[2])!="function" ){bCb("Argument type error!");return;}
	var url = String('http://sites.levelupgames.com.br/forum/elsword/search.php?do=process&query=Elspoiler&titleonly=1');
	request(url, function (error, response, body) {	
	if(error){return;}	
	request(response.request.uri.href, function (a, b, c) {
	var results_table = c.match(/showthread(.*?)(?=\;s)/gi);
	var results_table = results_table.filter(function(k){ if(!k.toLowerCase().match(/(c|v|t)\-gt/g)){return k;} });		
	if(results_table.length > 0){bCb(results_table);}	
	});
	});
}

function r_s(content){
let searchless = [];
searchless["LuCiel"] = ["lu","ciel"];searchless["Ainchase"] = ["ain"];searchless["Ara Haan"] = ["ara"];
var opl = 0;	
do {
  console.log([Object.keys(searchless)[opl],content]);
  opl++;
}
while(opl < 2);	
     if(content.length > 3){return content;}else{return encodeURIComponent("Índice de Guias");} 
}
}

