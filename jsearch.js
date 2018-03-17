var request = require('request');
var cheerio = require('cheerio');

exports.elwiki = function ( bQuery, bPage, bCb ){
	if( arguments.length===3 ){ 	
		if( typeof(arguments[1])=="number" && typeof(arguments[2])=="function" ){
			request('https://www.elwiki.net/w/Main_Page', function (error, response, html) {
			process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
			console.log(error);
  if (!error && response.statusCode == 200) {
    console.log(html);
  }
});
		}else{
			bCb("Argument type error!");
		}
	}else{
		bCb("Function argument missed!");
	}
}

