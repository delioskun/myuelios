const Discord = require('discord.js');
const myu = new Discord.Client();
const js = require('jsearch');
const isgd = require('isgd');  

var options = {};
var catched_phrases = [];
	  
/******************************************************/	  
	  
/******************************************************/	  
	  
myu.login(process.env.BOT_TOKEN);
myu.on('ready', () => { myu.user.setActivity('Elesis'); })

myu.on('message', message => {
		if(message.cleanContent.startsWith('@Myu')){
		const args = message.content.slice(1).trim().split(/ +/);
		const command = args[1].toLowerCase();	
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
		
		js.google('Elsword Forum',10,function(response){
		console.log(response) // Show the links for 10 pages on Google
		})	
		
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
		 let phrases = [
		 "Elesis. O jogo de ação do momento!",
		 "Lorde ficou engraçado agora: KEKEKEKEKEKE",
		 "Alguém disse, sacrossanto?",
		 "Brilha, brilha, espadinha. Quero ver você julgar!",
		 "Eve rainha, resto nadinha",
		 "Eu já disse que sou uma bot de familia. Não vou fazer piadas com a Código Absoluto D:",
		 "Meus sensores estão com pouca memória Ran, acho que a Ara passou por aqui -w-",
		 "As andorinhas voltaram! E a Vishnum também!",
		 "O nome do jogo é Elsword? Juro que nem reparei ;-;",
		 "Keep Calm e ESPADA ANCESTRAL!",
		 "Rosas são vermelhas, violetas são azuis. DFO é praquele lado, pelo amor de Jesus!",
		 "Minerva! Limpeza, maciez e perfume de Rosas.",
		 "Hayaaaa!!!!",
		 "Eu quero levar um Angkor pra casa <3",
		 "Todo natal a Rena some -.-'",
		 "WS tem bom gosto, por isso escolheu o Ventus qq",
		 "Neste momento uma conferência de Lolis ocorre na sala Luciel",
		 "Quem joga com capricho. Joga com Primor!",
		 "Quando que o Raven vem me substituir? -.-'",
		 "Acho que o BM ficou muito Furioso D:",
		 "Pi....Ka....Chunnnng!!!!",
		 "Este último look do Templário Cósmico ficou um ar-ra-so!",
		 "O DDD pra Add o Add...3ioo38282j83c398c239n. **Fatal Error: Error on NaN Class.** ",
		 "Há quanto tempo não vejo o Esper diabólico!Tá, essa foi péssima :C"
		 ];
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
		if(message.guild.owner.hasPermission("ADMINISTRATOR")){ 
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
		}}
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
		
	 if(!["face","site","omg","report","forum","elwiki","elspoiler","Oi","Olá!","reportchannel","rise"].includes(command)){
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
