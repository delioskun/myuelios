var request = require('request');
var cheerio = require('cheerio');

exports.elwiki = function ( bQuery, bPage, bCb ){
	if( arguments.length!=3 ){bCb("Function argument missed!");return;} 	
	if( typeof(arguments[1])!="number" && typeof(arguments[2])!="function" ){bCb("Argument type error!");return;}
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
	var url = String('https://elwiki.net/wiki/index.php?search=' + encodeURIComponent(bQuery));
	request(url, function (error, response, body) {
	if(error){return;}
	if(!response.request.uri.href.match(/\?search/gi)){bCb([response.request.uri.href]);return;}else{bCb(body.match(/\/w\/(.*?)(?=(\"))/gi));return;}
	});
}

exports.forum = function ( bQuery, bPage, bCb ){
	if( arguments.length!=3 ){bCb("Function argument missed!");return;} 	
	if( typeof(arguments[1])!="number" && typeof(arguments[2])!="function" ){bCb("Argument type error!");return;}
	  request('http://sites.levelupgames.com.br/forum/elsword/showthread.php?39107-%CDndice-de-Guias', function (error, response, body) {
    	  var re = new RegExp('showthread(.*?)' + encodeURI(bQuery.replace(/\s/gi,"-")) + '((.*?)|)(?=\\")','g');
	  console.log(body.match(re));	  
    	  if(body.match(re) != undefined){bCb(body.match(re));return;}	  
  	  });
	if(r_s(bQuery) == "Índice de Guias"){bCb(['showthread.php?39107-%CDndice-de-Guias']);return;}
	var url = String('http://sites.levelupgames.com.br/forum/elsword/search.php?do=process&query=' + r_s(bQuery) + '&titleonly=1');
	request(url, function (error, response, body) {	
	if(error){return;}	
	request(response.request.uri.href, function (a, b, c) {
	var results_table = c.match(/showthread(.*?)(?=\;s)/gi);	
	if(!results_table || results_table.length < 1){bCb([]);return;}		
	var results_table = results_table.filter(function(k){ if(!k.toLowerCase().match(/(c|v|t)\-gt/g)){return k;} });		
	if(results_table && results_table.length > 0){bCb(results_table);}else{bCb([]);return;}	
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
	if(!results_table || results_table.length < 1){bCb([]);return;}	
	var results_table = results_table.filter(function(k){ if(!k.toLowerCase().match(/(c|v|t)\-gt/g)){return k;} });	
	if(results_table && results_table.length > 0){bCb(results_table);}else{bCb([]);return;}	
	});
	});
}

function r_s(content){
let searchless = [];
searchless["LuCiel"] = ["lu","ciel"];searchless["Ainchase"] = ["ain"];searchless["Ara Haan"] = ["ara"];
var opl = 0;	
do { if(searchless[Object.keys(searchless)[opl]].includes(content.toLowerCase())){
   return Object.keys(searchless)[opl];
   break;
}
    opl++; }
while(opl < 3);	
     if(content.length > 3){return content;}else{return "Índice de Guias";} 
}  
