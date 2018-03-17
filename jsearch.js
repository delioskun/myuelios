getSource = require ('get-source');

exports.elwiki = function ( bQuery, bPage, bCb ){
	if( arguments.length===3 ){ 	
		if( typeof(arguments[1])=="number" && typeof(arguments[2])=="function" ){
			file = getSource ('www.google.com');
			console.log(file);
		}else{
			bCb("Argument type error!");
		}
	}else{
		bCb("Function argument missed!");
	}
}

