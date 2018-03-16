var http 	= require("http"),
	https 	= require("https");

exports.bing = function ( bQuery, bPage, bCb ){
	
	if( arguments.length===3 ){ 
		
		if( typeof(arguments[1])=="number" && typeof(arguments[2])=="function" ){
			
			// bing search can be start :)
			var bGelen = ""; 
			
			for(b=0;b<=arguments[1];b++){	
				bAyarlar = {
					host: "www.bing.com",
					path: "/search?q="+arguments[0]+"&first="+b+"1&FORM=PERE"
				}
				https.request(bAyarlar,(res)=>{
					res.on("data",(d)=>{
						bGelen += d;
					})
					res.on("end",()=>{
						bCb(bGelen.match(/(https|http)\:\/\/(www.|)(.*?)(?=\")/gi));
					})
				}).end()
				
			}
			
		}else{
			bCb("Argument type error!");
		}
		
	}else{
		bCb("Function argument missed!");
	}
	
}

