var https 	= require("https");

exports.bing = function ( bQuery, bPage, bCb ){
	
	if( arguments.length===3 ){ 
		
		if( typeof(arguments[1])=="number" && typeof(arguments[2])=="function" ){
			
			// bing search can be start :)
			var bGelen = ""; 
				bAyarlar = { host: "www.bing.com", path: "/search?q="+arguments[0] }
				https.request(bAyarlar,(res)=>{ res.on("data",(d)=>{ bGelen += d; })
					console.log(bGelen);		       
					res.on("end",()=>{ console.log("Gotcha!"); bCb(bGelen.match(/(https|http)\:\/\/(www.|)(.*?)(?=\")/g)); })
				}).end()
							
		}else{
			bCb("Argument type error!");
		}
		
	}else{
		bCb("Function argument missed!");
	}
	
}

