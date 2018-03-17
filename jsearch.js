var request = require('request');
var cheerio = require('cheerio');

exports.elwiki = function ( bQuery, bPage, bCb ){
	if( arguments.length===3 ){ 	
		if( typeof(arguments[1])=="number" && typeof(arguments[2])=="function" ){
			request('https://br.search.yahoo.com/search;_ylt=A2KLfRbLUa1a0hYAgxry6Qt.;_ylc=X1MDMjExNDcxMDAwMgRfcgMyBGZyAwRncHJpZANDYmxKeXRmaFFUdVFrRzN0SXJ4UVRBBG5fcnNsdAMwBG5fc3VnZwMwBG9yaWdpbgNici5zZWFyY2gueWFob28uY29tBHBvcwMwBHBxc3RyAwRwcXN0cmwDBHFzdHJsAzE2BHF1ZXJ5A1Jvc2UlMjBlbCUyMHdpa2kEdF9zdG1wAzE1MjEzMDgxMTc-?fr2=sb-top-br.search&p=Elesis+el+wiki&fr=sfp&iscqry=', function (error, response, html) {
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

