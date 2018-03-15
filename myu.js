const Discord = require('discord.js');
const myu = new Discord.Client();
const sec = require('serp-spider/search-engine-google');
const get_phrases = require('./phrases');
const isgd = require('isgd');  
	  
let phrases = get_phrases.myu_phrases();
	  
var options = {};
var catched_phrases = [];	  	  
	  
/******************************************************/	  
	  
/******************************************************/	  
	  
myu.login(process.env.BOT_TOKEN);
myu.on('ready', () => { myu.user.setActivity('Elesis');console.log('Driver on! Please!'); })

myu.on('message', message => {
		if(message.cleanContent.startsWith('@Myu')){
		const args = message.content.slice(1).trim().split(/ +/);
		const command = (args[1] == undefined ? "chamada" : args[1]);	
		args.shift();args.shift();	
		if(["forum","elwiki","elspoiler"].includes(command.toLowerCase())){
		let usersearch = args.join(" ");
		let usersearchview = "";
		switch(command){
			case "elwiki":
			usersearchview = othercontent(usersearch) + " - El wiki";
			break;
			case "forum":
			usersearchview = usersearch + " \"showthread\" site:sites.levelupgames.com.br";
			break;
			case "elspoiler":
			usersearchview = "Elspoiler :last site:sites.levelupgames.com.br";
			break;
		}
		
		sec.bing(usersearchview).then(function(gotcha){	
		if(usersearch.length <= 2 && usersearch.length > 0){message.reply('Desculpa,meus sensores falharam, não consegui encontrar o que queria :('); return;}
		console.log(result);
		});			
		
	 }
	 switch(command){
		 case 'report':
		 let userid = message.author;
		 let userwarn = args[0];
		 args.shift();
		 let warningtext = args.join(" ");
		 var request = require("request");
		 var options = { method: 'GET', url: path_to_db(), headers: data_conection() };
		 request(options, function (error, response, body) {
		 if (error) throw new Error(error);
		 if(data_exists(body,message.guild.id)){
		 message.guild.channels.find("name", eval(body)[i].server_value).send(`**Denuncia de ${userid}**\n**Denunciado:** ${userwarn}\n**Data e hora da denuncia:** ${message.createdAt}\n**Canal do ocorrido:** ${message.channel.name}\n**Causa:** ${warningtext}` );
		 }});
		 message.delete(0, console.log(''));
		 break;
		 case 'omg':
		 if(catched_phrases.length == 24){catched_phrases = [];}
		 var choosen_phrase = 0;
		 do{
		 choosen_phrase = Math.floor((Math.random() * 24));	 
		 }
		 while(catched_phrases.includes(choosen_phrase));
		 message.channel.send(phrases[choosen_phrase]);
		 catched_phrases.push(choosen_phrase);
		 break;
		 case 'face':
		 message.reply('Visite a nossa página no facebook!\nhttps://www.facebook.com/ElswordLU');
		 break;
		 case 'site':
		 message.reply('Confira noticias e informações sobre o mundo de Elios no site oficial!\nhttp://elsword.uol.com.br/');
		 break;
		 case 'reportchannel':
		 let channel = args[0];
		 console.log("=====================");	 
		if(message.member.permissions.has('ADMINISTRATOR')){ 
		 if(myu.channels.exists("name", channel)){
		 
		var request = require("request");

		var options = { method: 'GET', url: path_to_db(), headers: data_conection() };

		request(options, function (error, response, body) {
		if (error) throw new Error(error);
		if(data_exists(body,message.guild.id)){ update_data(eval(body)[i]._id,channel); }else{ create_data(message.guild.id,channel);}				
		});
		 message.channel.send(`Canal de reports alterado para ***${channel}***`);
		 }else{
		 message.channel.send(`Desculpa :c Não achei esse canal`);	 
		}}else{
		 message.reply(`Você não pode usar esse comando u-u''`);	
		}
		 break;
		 case 'Oi':
		 message.reply("Olá! ^^");
		 break;
		 case 'Olá!':
		 message.reply("Olá! ^^");
		 break;
		 case 'rise':
    		 let args_db = process.env.BOT_DB;	 
		 message.reply('dois');
		 break;
		 case 'chamada':
		 message.channel.send("Me chamaram?");
		 break;
		 
		 
	 }
	 let replieswords = [
	 "Vou lavar sua boca com sabão -.-''",
		"Quanta indecência -.-'",
		"Mds, tem respeito mais não?",
		"Não escuto, não sou mico, meu ouvido não é pinico.",
		"Manera as palavras, por favor.",
		"Isto é um ambiente familiar u-u <3",
		"Kerido, sou uma bot de respeito para ouvir palavras nesse tom."
		];
	if(message.content.match(/ch.v.s(c.|k)|krl|c.r.lh.|(c.|k)(ss|c|s).t.|bct|(b.c.t.)|ppk|mrd|m[e,i,u]rd(|.)|porr.|bost.|(teu|no) cu|(\bput.)|v.di.|vi.do/g)){	
			message.reply(replieswords[Math.floor((Math.random() * 7))]);
			message.delete(0, console.log(''));
	}else{		
		
	 if(!["face","site","search","omg","report","forum","elwiki","chamada","elspoiler","Oi","Olá!","reportchannel","rise"].includes(command)){
		let replies = ["Amore, precisa de um help? Não entendi o que deseja.",
		"Me chamaram? x3 Desculpa, mas não entendi o seu comando, pode repetir?",
		"Se está insinuando algo, eu realmente não entendi! Repita o comando.",
		"Eu juro que não entendi, pode repetir?",
		"Ilari,Ilariê! Ô Ô Ô!Repita novamente, p-o-r f-a-v-o-r!",
		"Você está me preocupando, porque não entendi o que quis dizer. Repita D:"
		]
		message.channel.send(replies[Math.floor((Math.random() * 4))]);}
		}
		}		
});

/******************************************************/	  
	  
/******************************************************/	

function othercontent(content){
let elwikicontent = [];
elwikicontent["Apsara"] = ["vishnu","vishnum"];
elwikicontent["Devi"] = ["brama","brahma","brahmadeva"];
elwikicontent["Shakti"] = ["shiva","dara","daara"];
for (i = 0; i < 3; i++) { 
  if(elwikicontent[Object.keys(elwikicontent)[i]].includes(content.toLowerCase())){
    return Object.keys(elwikicontent)[i];
    break;
  }else{
	return content;  
  }
}
}

/******************************************************/	  
	  
/******************************************************/	

function create_data(id,channel){
var request = require("request");	
var options = { method: 'POST',
  url: path_to_db(),
  headers: data_conection(),
  body: { server_id: id, server_key: 'report_channel', server_value: channel },
  json: true };
  request(options, function (error, response, body) {
  if (error) throw new Error(error);
});
}

/******************************************************/	  
	  
/******************************************************/	

function update_data(path,channel){
var request = require("request");	
var options = { method: 'PUT',
		url: path_to_db() + '/' + path,
		headers: data_conection(),
		body: { server_value: channel },
		json: true };
		request(options, function (error, response, body) {
		if (error) throw new Error(error);
		});	
}

/******************************************************/	  
	  
/******************************************************/	

function data_conection(){ 
	let vars_db = eval(process.env.BOT_DB);
	return { 'cache-control': vars_db[0], 'x-apikey': vars_db[1], 'content-type': vars_db[2] };	}

/******************************************************/	  
	  
/******************************************************/	

function path_to_db(){
	return "https://" + process.env.BOT_PATH;
}

/******************************************************/	  
	  
/******************************************************/	

function data_exists(body,id){
if(eval(body).length == 0){return false;}	
for(i = 0; i < (eval(body).length); i++){if(eval(body)[i].server_id == id){return true; break;}}	
}
