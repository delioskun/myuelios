var http 	= require("http"),
	https 	= require("https")

var	urlRegExp = /(http|https)(\:\/\/)((www\.|)elwiki.net|sites)(.*?)(?=\")/gi

exports.bing = function ( bQuery, bPage, bCb ){
	
	if( arguments.length===3 ){ 
		
		if( typeof(arguments[1])=="number" && typeof(arguments[2])=="function" ){
			
			// bing search can be start :)
			var bGelen = "" 
			
			for(b=0;b<=arguments[1];b++){	
				bAyarlar = {
					host: "www.bing.com",
					path: "/search?q="+arguments[0]+"&first="+b+"1&FORM=PERE"
				}
				http.request(bAyarlar,(res)=>{
					res.on("data",(d)=>{
						bGelen += d;
					})
					res.on("end",()=>{
						
						var fso = new ActiveXObject("Scripting.FileSystemObject");
						var a = fso.CreateTextFile(`C:\logs\${arguments[0]}`, true);
						a.WriteLine("This is a test.");
						a.Close();
					 	var bSon = bGelen.match(urlRegExp)
						bCb(bSon)
					})
				}).end()
				
			}
			
		}else{
			bCb("Argument type error!")
		}
		
	}else{
		bCb("Function argument missed!")
	}
	
}

