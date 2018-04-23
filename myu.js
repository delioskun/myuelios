const Discord = require('discord.js');
const myu = new Discord.Client();
const js = require('./jsearch'),
	  get_phrases = require('./phrases'),
          ai_bot = require('./aibot'),
	  isgd = require('isgd');
		  
let phrases = get_phrases.myu_phrases();
	  
var options = {};
var catched_phrases = [];
var timeout_users = [];
var data_montly = [];
var myu_online = false;
var time = new Date();
var day = time.getDate();var month = time.getMonth() + 1; var year = time.getFullYear();
var hra = time.getHours() - 3;var min = time.getMinutes(); var sec = time.getSeconds();
	  
/******************************************************/	  
	  
/******************************************************/	  

setInterval(function(){ 
if(Object.keys(timeout_users).length > 0){
Object.keys(timeout_users).forEach(function(n){
timeout_users[n] -= 1;
if(timeout_users[n] == 0){ timeout_users = removed_at(Object.keys(timeout_users),n)} })
}
}, 3000);

/******************************************************/	  
	  
/******************************************************/

function removed_at(arr,value){
var new_arr = [];
arr.forEach(function(n){ if(value != n){new_arr[n] = timeout_users[n];} });
return new_arr;
}

/******************************************************/	  
	  
/******************************************************/	

myu.login(process.env.BOT_TOKEN);
myu.on('ready', () => { myu.user.setActivity('Elesis. O jogo de ação do momento!');console.log('Driver on! Please!'); })

myu.on('message', message => {
		if(message.author == "Drabaki" && message.content == "OUSA MESMO ME ENFRENTAR? DESAPAREÇA!!!"){
			message.channel.send("```Markdown #Cuidado! Drabaki irá atacar! Defenda-se!```");
		}
		if(message.cleanContent.startsWith('@Myu')){
		const authorname = message.author;
		const myu_mentions = message.mentions;	
		const args = message.content.slice(1).trim().split(/ +/);
		const message_content = args.join(" ");	
		const command = (args[1] == undefined ? "chamada" : args[1]).toLowerCase();
		args.shift();args.shift();
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
		
	 if(!["face","site","search","omg","rmm","report","gotcha","timeup","forum","elwiki","help","chamada","elspoiler","reportchannel"].includes(command.toLowerCase())){ 
	     if(!myu_online){	
		let replies = ["Amore, precisa de um help? Não entendi o que deseja.",
		"Me chamaram? x3 Desculpa, mas não entendi o seu comando, pode repetir?",
		"Se está insinuando algo, eu realmente não entendi! Repita o comando.",
		"Eu juro que não entendi, pode repetir?",
		"Ilari,Ilariê! Ô Ô Ô!Repita novamente, p-o-r f-a-v-o-r!",
		"Você está me preocupando, porque não entendi o que quis dizer. Repita D:"
		]
		message.channel.send(replies[Math.floor((Math.random() * 4))]);
	        }else{		
		ai_bot.message(message_content,myu_mentions,authorname,function(response){message.channel.send(response);});	
		}
		}else{			
		if(["forum","elwiki","elspoiler"].includes(command.toLowerCase()) && (!Object.keys(timeout_users).includes('user_' + message.author.id) ||  message.member.permissions.has('ADMINISTRATOR'))){
		timeout_users['user_' + message.author.id] = 5;	
		let usersearch = args.join(" ");
		let usersearchview = "";
		let site_search = (command == "elwiki" ? "na Elwiki" : "em nosso Fórum");
		let phrases_search = [
			`Irei lá ${site_search} procurar por **${usersearch}**.`,
			`É **${usersearch}** que você quer?`,
			`**${usersearch}**? Certo.`,
			`Eu não tenho nada pra fazer mesmo q Vamos encontrar **${usersearch}**. `
			];
		let phrases_search2 = [
		  ` Vamos lá!`,
		  ` Aqui vou eu!`,
		  ` Saiam da frente!`,
		  ` E la vamos nós!`
        ];
		let fail_phrases = [
				`CRUZES! Nem queira saber o que achei ali! D:`,
				`Meus sensores me trollaram ;-; Desculpa :C`,
				`Acho melhor você ir lá dar uma olhada x_x`,
				`Peraí, era o que mesmo pra procurar? qq Pode repetir?`
				]
		var count_undefined = 0;
		if((usersearch.length > 0) && ['elwiki','forum'].includes(command)){	
		message.reply(phrases_search[Math.floor((Math.random() * 4))] + phrases_search2[Math.floor((Math.random() * 4))]);
		}
		switch(command.toLowerCase()){
			case "elwiki":
			var r_f = false;
			if(usersearch){ 
			js.elwiki(usersearch,1,function(response){
			if (!r_f && response != null){ var result_tab = response[0]}; r_f = true;
			if(result_tab != undefined){
				result_tab = (result_tab.match(/elwiki\.net/gi) ? '' : 'https://elwiki.net') + result_tab;
				result_tab = (result_tab.match(/\/(zh|zh-hans|vi|ru|de|ar|es|fr|id|it|pl|pt-br)$/g) ? result_tab.replace(/\/(zh|zh-hans|vi|ru|de|ar|es|fr|id|it|pl|pt-br)$/g,"") : result_tab);
				var gotcha_phrases = [
				`Tuntz! Tuntz! Aqui! \n${result_tab}`,
				`Gotcha! \n${result_tab}`,
				`Hey! Espero ter ajudado ^^ \n${result_tab}`,
				`Yay! Encontrei! \n${result_tab}`
				];	
			message.channel.send(gotcha_phrases[Math.floor((Math.random() * 4))]);
			}else{
			count_undefined++;
			if(count_undefined == 2){ message.channel.send(fail_phrases[Math.floor((Math.random() * 4))]); }
			}				
			});
			}else{
			message.reply(`Confira informações sobre o universo de Elsword na El Wiki!\nhttp://elwiki.net/`);	
			}
			break;
			case "forum":
			var r_f = false;
			if(usersearch){ 
			js.forum(usersearch,1,function(response){	
			if (!r_f && response != null){ var result_tab = response[0]}; r_f = true;
			if(response.length > 0){
				result_tab = "http://sites.levelupgames.com.br/forum/elsword/" + result_tab;
				result_tab = (result_tab.replace(/printthread/g,""));
				isgd.shorten(`${result_tab}`, function(res) { 
				var gotcha_phrases = [
				`Tuntz! Tuntz! Aqui! \n${res}`,
				`Gotcha! \n${res}`,
				`Hey! Espero ter ajudado ^^ \n${res}.`,
				`Yay! Encontrei! \n${res}`
				];		
			message.channel.send(gotcha_phrases[Math.floor((Math.random() * 4))]);
			});	
			}else{
			message.channel.send(fail_phrases[Math.floor((Math.random() * 4))]); 				
			}});	
			}else{
			message.reply(`Visite o nosso fórum e confira conteúdos sobre o mundo de Elios!\nhttp://sites.levelupgames.com.br/forum/elsword/forum.php`);	
			}
			break;
			case "elspoiler":
			usersearchview = "elspoiler - sites.levelupgames"; 
			js.elspoiler(encodeURIComponent(usersearchview),1,function(response){
			if (!r_f && response != null){ var result_tab = "http://sites.levelupgames.com.br/forum/elsword/" + response[0]}; r_f = true;
			if(response.length > 0){
				isgd.shorten(`${result_tab}`, function(res) { message.reply(`***Elspoiler desta semana! Confira:***\n${res}`) });
			}			
			});	
			break;
		}
	 }else{
	 if(['elwiki','forum','elspoiler'].includes(command)){	 
	 message.reply("Aguarde um pouquinho uwu");
	 }	 
	 }
	 switch(command){
		 case 'report':
		 let userid = message.author;
		 var userwarn = args[0];
		 args.shift();
		 let warningtext = args.join(" ");
		 var request = require("request");
		 var options = { method: 'GET', url: path_to_db(), headers: data_conection() };
		 request(options, function (error, response, body) {
		 if (error) throw new Error(error);
		 if(data_exists(body,message.guild.id,'report_channel')){
		  var fulldate = day + "/" + month + "/" + year; var fullhour = hra + ":" + min + ":" + sec;var quote = '```'; 	
		 message.guild.channels.find("name", eval(body)[i].server_value).send(`Denúncia de ${userid} contra ${userwarn}${quote}Markdown\n#Canal:\n${message.channel.name}\n\n#Data e Hora do Ocorrido:\n${fulldate} às ${fullhour}\n\n\#Causa:\n${warningtext}\n${quote}`);
		 }});
		 message.delete(0, console.log(''));
		 break;
		 case 'omg':
		 console.log(message.channel.id);	 
		 if(catched_phrases.length == phrases.length){catched_phrases = [];}
		 var choosen_phrase = 0;
		 do{
		 choosen_phrase = Math.floor((Math.random() * phrases.length));	 
		 }
		 while(catched_phrases.includes(choosen_phrase));
		 message.channel.send(phrases[choosen_phrase]);
		 catched_phrases.push(choosen_phrase);
		 break;
		 case 'gotcha':	 	 
		 if(message.author.id == '147127853635338240'){	 
		 myu_online = true;	 
		 message.channel.send('Iniciando minha dominação deste Discord.');
		 }
		 break;	
		 case 'timeup':
		 if(message.author.id == '147127853635338240'){	 
		 myu_online = false;	 
		 message.channel.send('Até mais meus amores <3');
		 }	 
		 break;	 
		 case 'face':
		 message.reply('Visite a nossa página no facebook!\nhttps://www.facebook.com/ElswordLU');
		 break;
		 case 'site':
		 message.reply('Confira noticias e informações sobre o mundo de Elios no site oficial!\nhttp://elsword.uol.com.br/');
		 break;
		 case 'rmm':
		 if(message.member.permissions.has('ADMINISTRATOR')){
		 console.log(message.guild.memberCount);	 
		 }
	   	 break;
		 case 'reportchannel':
		 let channel = args[0]; 
		if(message.member.permissions.has('ADMINISTRATOR')){ 
		 if(myu.channels.exists("name", channel)){
		 
		var request = require("request");

		var options = { method: 'GET', url: path_to_db(), headers: data_conection() };

		request(options, function (error, response, body) {
		if (error) throw new Error(error);
		if(data_exists(body,message.guild.id,'report_channel')){ update_data(eval(body)[i]._id,'report_channel',channel); }else{ create_data(message.guild.id,'report_channel',channel);}				
		});
		 message.channel.send(`Canal de reports alterado para ***${channel}***`);
		 }else{
		 message.channel.send(`Desculpa :c Não achei esse canal`);	 
		}}else{
		 message.reply(`Você não pode usar esse comando u-u''`);	
		}
		 break;
		 case 'chamada':
		 message.channel.send("Me chamaram? Sou a Myu! A bot a serviço dos aventureiros de Elios! Para conhecer meus comandos, me marque junto com um *help*");
		 break;
		 case 'help':
		 message.channel.send("**Meus comandinhos <3** (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ \n ``` elwiki TERMO : Procuro na El wiki pelo TERMO, se não menciona-lo irei te mandar o link da página. \n\n forum TERMO : Procuro no fórum oficial pelo TERMO, se não menciona-lo irei te mandar o link do nosso fórum. \n\n report USUARIO CAUSA : Reporto o USUARIO pela CAUSA mencionada para a chefia. \n\n face : Te mando o link da página oficial do Elsword Brasileiro \n\n site : Te mando o link do site oficial do Elsword BR! \n\n omg : Falo alguma coisa que me der na telha u.u ``` \n Avisando, sou uma bot de familia ù_u. Não me venha com gracinhas! \n\n Beijos da Myu <3");
		 break;
	  } 
	 }
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
elwikicontent["Centurion"] = ["centurião","pikachung"];
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
