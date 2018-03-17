var request = require('request');
var cheerio = require('cheerio');

exports.elwiki = function ( bQuery, bPage, bCb ){
	if( arguments.length===3 ){ 	
		if( typeof(arguments[1])=="number" && typeof(arguments[2])=="function" ){
			request('https://www.elwiki.net/wiki/index.php?search=Sariel&title=Special%3ASearch&go=Go', function (error, response, html) {
 			 console.log(error);
});
		}else{
			bCb("Argument type error!");
		}
	}else{
		bCb("Function argument missed!");
	}
}

