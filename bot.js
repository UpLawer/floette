const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});

client.on('ready', () => {
  console.log('estoy listo!');
  client.user.setGame(`f&help | v1.0`);
});

client.on('message', async message => {
  const prefixes = ['f&', 'f#', 'f!'];
const superagent = require("superagent");
const ytdl = require('ytdl-core')
let prefix = false;

for(const thisPrefix of prefixes) {
    if(message.content.startsWith(thisPrefix)) prefix = thisPrefix;
}
if(!prefix) return;
if (!message.content.startsWith(prefix)) return;
 if (message.author.bot) return;
  
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
  if(message.content.startsWith(prefix + 'ping')){
   let ping = Math.floor(message.client.ping);
       var embed = new Discord.RichEmbed().setDescription(":hibiscus: Pong! **" + ping + "ms.**")
    .setColor(0x66ff66)
  }
    if(command === "userstatus") {
  let color = {
      "online": "#00c903",
      "idle": "#ff9a00",
      "dnd": "#ff0000",
      "offline": "#d8d8d8"
};
let estados = {
      "online": "Online",
      "idle": "Idle",
      "dnd": "Do Not Disturb",
      "offline": "Invisible"
};

let user = message.mentions.users.first();
if(!user) return message.reply(`You have to mention someone!`);

var embed = new Discord.RichEmbed()
    .setColor(color[user.presence.status])
    .addField(`The state of ${user.username}`, `${estados[user.presence.status]}`)
}
  if(command === "play") {
    if (!message.member.voiceChannel) return message.channel.send('🚫 You have to be in a voice channel!');
    if (message.guild.me.voiceChannel) return message.channel.send('🚫 I am connected in a voice channel alredy!');
    if (!args[0]) return message.channel.send('Please you have to put a youtube url in order to play it!');

    let validate = await ytdl.validateURL(args[0]);
   
    if (!validate) return message.channel.send('🚫 Please put a valid url in order to play it!');

    let info = await ytdl.getInfo(args[0]);
   
    let connection = await message.member.voiceChannel.join();
    let dispatcher = await connection.playStream(ytdl(args[0], {
        filter: 'audioonly'
    }));

    let playembed = new Discord.RichEmbed()
    .setTitle("Now Playing!")
    .setDescription(`${info.title}`)
    
    message.channel.send(playembed);
}
          if(command === "leave") {
  let Canalvoz = message.member.voiceChannel;

if(!Canalvoz) {
    message.channel.send('You have to be in a voice channel!');

} else {
    message.channel.send('Floette leaving the voice channel...').then(() => {
        Canalvoz.leave();

    }).catch(error => console.log(error));
} 
} 
  let Canalvoz = message.member.voiceChannel;
  if(command === 'join'){
if (!Canalvoz || Canalvoz.type !== 'voice') {
message.channel.send('You have to be in a voice channel!').catch(error => message.channel.send(error));

} else if (message.guild.voiceConnection) {
    message.channel.send(`I'm connected in a voice channel already!`);

} else {
     message.channel.send('Joining...').then(m => {
          Canalvoz.join().then(() => {

               m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
         }).catch(error => message.channel.send(error));

     }).catch(error => message.channel.send(error));
}
}
      if(command === 'ranks'){
let id = message.guild.id;
  var embed = new Discord.RichEmbed()
    .setColor(0x66ff66)
    .setDescription(`${client.guilds.get(id).roles.map(r => r.name).join(", ")}`)
    .setFooter('All server ranks!: '+ message.guild.name);
      }
message.channel.send({embed});
        if(command === 'permission'){
  if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
    message.reply("🚫 | I dont have permission!");
    return;

} else{
    message.channel.send(':white_check_mark: | Yes if have permission!');

}}
    if(command === 'commands'){
var embed = new Discord.RichEmbed()
.setColor(0x66ff66) 
.setDescription('My prefixes are: __**f&**__,  __**f!**__,  __**f#**__')
.addField('Normal','__**avatar**__,  __**ping**__,  __**serverinfo**__,  __**userinfo**__,  __**userstatus**__,  __**poll**__,  __**say**__,  __**esay**__,  __**8ball**__,  __**cat**__,  __**qrcode**__')

.addField('Entertainment','__**hug**__,  __**kiss**__,  __**slap**__,  __**pat**__,  __**tickle**__')

.addField('Games','__**osu**__')

.addField('Music','__**join**__,  __**play**__,  __**leave**__')

.addField('Moderation','__**tempmute**__,  __**ban**__,  __**kick**__,  __**clear**__')

.addField('NSFW','__**fuck**__,  __**smallboobs**__,  __**cum**__,  __**hentai**__')

.addField('Radio','__**electro**__,  __**trap**__,  __**anime**__')

.setImage('https://i.imgur.com/EdJ2ELn.gif')

.setThumbnail('https://i.imgur.com/A7esq6N.png')

.setAuthor(message.author.username, message.author.avatarURL)

.setTimestamp()
message.channel.send(embed)

}
if(command === 'help'){

var embed = new Discord.RichEmbed()

.setColor(0x66ff66) 

.setDescription('▸ Hello! My name is __**Floette**__! I am a special bot in order to entertain many people! My developers are: __**UpLawer#3161**, If you want to know all my public commands just type ``f&commands``!')

.addField(':green_book: ▸ Go to invite me!', '[▸ Invite!](https://discordapp.com/api/oauth2/authorize?client_id=496094066748948484&permissions=8&scope=bot)')

.setThumbnail('https://i.imgur.com/EsoYNuY.png')

.setAuthor(message.author.username, message.author.avatarURL)

.setFooter(`Enjoy it! ${message.author.username}#${message.author.discriminator} • 31 commands available!`)
message.channel.send(embed)
}
  const tempy = require('tempy')
const qrcode = require('qrcode') 
  if(command === 'qrcode'){
  
  const qrOutput = tempy.file({ extension: "png" });
    message.channel.startTyping();
    if (args.length > 0) {
        qrcode.toFile(qrOutput, args.join(" "), { margin: 1 }, (error) => {
            if (error) throw new Error(error);
            message.channel.stopTyping();
            message.channel.send({
                files: [{
                    attachment: qrOutput,
                    name: "qrcode.png"
                }]
            });
        });
    }else{
        message.channel.stopTyping();
        message.reply("you need to provide text to generate a QR code!");
    }
  }
      const osu = require('node-osu')
      if(command === 'osu'){
      var osuApi = new osu.Api('a07ff6f38d977575e967c53933ba2c6b6fada5fc')
    let ur = args.slice(1).join(' ');
    let md = args[0];
    if(!args) return;
    
    if (!md && !ur) return message.channel.send('__**Modes**__: \n`-` std ``(Standard)`` \n`-` taiko ``(Taiko)`` \n`-` ctb ``(Catch the Beat)`` \n`-` mania ``(Mania)``')
    if (!ur) return message.reply('__**invalid user**__!')
    
    if (md === "std") md = 0
    if (md === "taiko") md = 1
    if (md === "ctb") md = 2
    if (md === "mania") md = 3
      osuApi.getUser({u: ur, m: md}).then(user => {
          
    let titlem;
    if (md === 0) titlem = "osu!standard"
    if (md === 1) titlem = "osu!taiko"
    if (md === 2) titlem = "osu!ctb"
    if (md === 3) titlem = "osu!mania"
        
    const embed = new Discord.RichEmbed()
    .setTitle('Statistics of '+titlem+' for: '+user.name)
            .setURL(`https://osu.ppy.sh/u/${user.id}`)
            .addField('ID', `${user.id}`, true)
            .addField('City', `${user.country} :flag_${user.country.toLowerCase()}:`, true)
            .addField('Performance points', `${user.pp.raw.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true)
            .addField('Precision', `${user.accuracyFormatted}`, true)
            .addField('Global rank', `#${user.pp.rank.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true)
            .addField('Country rank', `#${user.pp.countryRank.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true)
            .addField('Played games', `${user.counts.plays.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`, true)
            .setColor(0x66ff66)
            .setThumbnail(`http://a.ppy.sh/${user.id}`)
            message.channel.send({embed});
      })
}
if(command === 'ascii'){
var figlet = require('figlet');


  var maxLen = 12
  
  if(args.join(' ').length > maxLen) return message.channel.send('Say a content with less than __**12**__ characters! ') 
  
  if(!args[0]) return message.channel.send('Please say a content!');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Something doesnt function well...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });


}
  if(command === 'slap'){

let slapUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!slapUser) return message.channel.send("You must to mention someone");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/slap`);

    var slapEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** slapped **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor(0x66ff66)
    
    message.channel.send(slapEmbed)

}
  if(command === `ban`){
var member = message.mentions.members.first();
  var perms = message.member.hasPermission("ADMINISTRATOR");
if(!perms) return message.channel.send("You can not mention yourself!");  
if(!member) return message.reply(`You have to mention a user to order to ban it!`)
    member.ban().then((member) => {
        message.channel.send("The user __**" + member.displayName + "**__ was banned successfully!");
    }).catch(() => {
        message.channel.send("__**Access denied!**__");
    })
}
    if(command === `kick`){
var member = message.mentions.members.first();
  var perms = message.member.hasPermission("ADMINISTRATOR");
if(!perms) return message.channel.send("You do not have permissions to use this command!");  
      if(!perms) return message.reply.send('You can not mention yourself!')
if(!member) return message.reply(`You have to mention a user in order to kick it!`)
    member.kick().then((member) => {
        message.channel.send("The user __**" + member.displayName + "**__ was kicked successfully!");
    }).catch(() => {
        message.channel.send("__**Access denied!**__");
    })
}
  
  if(command === 'hug'){

let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("You have to mention someone!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    var hugEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor(0x66ff66)
     message.channel.send(hugEmbed)

}
    if(command === 'cat'){


    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/meow`);

    var meowEmbed = new Discord.RichEmbed()
    .setImage(body.url)
    .setColor(0x66ff66)
     message.channel.send(meowEmbed)

}
  if(command === 'tickle'){

let tickleUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tickleUser) return message.channel.send("You have to mention someone!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/tickle`);

    var tickleEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** He tickled you **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor(0x66ff66)
    

    message.channel.send(tickleEmbed)

}
  if(command === 'kiss'){

let kissUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kissUser) return message.channel.send("You have to mention someone!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/kiss`);

    var kissEmbed = new Discord.RichEmbed()
    .setDescription(`**${message.author.username}** kissed **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor(0x66ff66)
    

    message.channel.send(kissEmbed)

}
  if(command === 'hentai'){

let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/Random_hentai_gif`);
    if (!message.channel.nsfw) return message.reply("you must be in a channel ``N.S.F.W``!");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(body.url)
    .setColor(0x66ff66)
    
 message.channel.send(hentaiEmbed);

}
    if(command === 'fuck'){
let fuckUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!fuckUser) return message.channel.send("You have to mention someone!");
let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/anal`);
    if (!message.channel.nsfw) return message.reply("you must be in a channel ``N.S.F.W``!");
  
    let fuckEmbed = new Discord.RichEmbed()
    .setDescription(`__**${message.author.username}**__ fucked __**${message.mentions.users.first().username}**__ ( ͡° ͜ʖ ͡°)`)
    .setColor("RANDOM")
    .setImage(body.url)
    .setColor(0x66ff66)
    
 message.channel.send(fuckEmbed);

}
    if(command === 'smallboobs'){

let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/smallboobs`);
    if (!message.channel.nsfw) return message.reply("you must be in a channel ``N.S.F.W``!");
  
    let smallboobsEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(body.url)
    .setColor(0x66ff66)
    
 message.channel.send(smallboobsEmbed);

}
  if(command === 'cum'){

let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/cum`);
    if (!message.channel.nsfw) return message.reply("you must be in a channel ``N.S.F.W``!");
  
    let cumEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setImage(body.url)
    .setColor("#fdeb29")
    
 message.channel.send(cumEmbed);

}
    if(command === 'pat'){
let fuckUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!fuckUser) return message.channel.send("You have to mention someone!");
let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/pat`);
    let fuckEmbed = new Discord.RichEmbed()
    .setDescription(`__**${message.author.username}**__ patted __**${message.mentions.users.first().username}**__`)
    .setColor("RANDOM")
    .setImage(body.url)
    .setColor(0x66ff66)
    
 message.channel.send(fuckEmbed);
message.delete().catch(O_o=>{});
}
          if(command === 'poll'){     
if(!args.join(' ')) return message.channel.send('You have to write a question!')
const embed = new Discord.RichEmbed()
      .setAuthor('Poll:')
      .setDescription(args.join(' '))
      .addField('Option 1', '1\u20e3 Yes')
      .addField('Option 2', '2\u20e3 No')
      .addField('Option 3', '3\u20e3 Maybe')
      .setColor(0x66ff66)
      .setTimestamp()

message.channel.send({embed})
.then(m => {
        m.react("1\u20e3");
        m.react("2\u20e3");
        m.react("3\u20e3");
});
      }
  let texto = args.join(" ");
if(command === 'esay'){
    if(!texto) return message.channel.send(`You have to write a content!`);
   var embed = new Discord.RichEmbed()
.setColor(0x66ff66)
 .setDescription(texto);
    message.channel.send(embed)
 message.delete().catch(O_o=>{});

}
  if(command === 'say'){
    if(!texto) return message.channel.send(`You have to write a content!!`);
   var embed = new Discord.RichEmbed()
.setColor(`RANDOM`)
 .setDescription(texto);
    message.channel.send(texto)
 message.delete().catch(O_o=>{});

}
      if(command === 'tempmute'){
  const ms = require(`ms`)

  
let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.channel.send("You have to mention an __**user**__ and the __**time**__!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You do not have permissions to do that!");
  let muterole = message.guild.roles.find(`name`, "Floette Muted");
  
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Floette Muted",
        color: "0x66ff66",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  
  let mutetime = args[1];
  if(!mutetime) return message.channel.send("You have to specify a time! :alarm_clock: ");

  await(tomute.addRole(muterole.id));
  message.channel.send(`<@${tomute.id}> you were muted by: __**${ms(ms(mutetime))}**__`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> You are already unmuted!`);
  }, ms(mutetime));


}
  if(command === 'serverinfo'){
let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setFooter(`Server created on: • ${day}.${month}.${year}`)
   .setColor(0x66ff66)
   .setThumbnail(sicon)
   .addField("• ID", message.guild.id, true)
   .addField("• Name", message.guild.name, true)
   .addField("• Owner", message.guild.owner.user.tag, true)
   .addField("• Region", message.guild.region, true)
   .addField("• Channels", message.guild.channels.size, true)
   .addField("• Users", message.guild.memberCount, true)
   .addField("• Humans", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("• Bots", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("• Online", online.size, true)
   .addField("• Ranks",'f&ranks')
   .addField("• Numero de roles", message.guild.roles.size, true);
   message.channel.send(serverembed);

}
    if(command === 'userinfo'){
  let userm = message.mentions.users.first()

if(!userm){
  var user = message.author;
      
  const embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
    .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
    .addField('• Playing to:', user.presence.game != null ? user.presence.game.name : "Nothing", true)
    .addField('• ID', user.id, true)
    .addField('• Status', user.presence.status, true)
    .addField('• Nickname', message.member.nickname, true)
    .addField('• Account Creted', user.createdAt.toDateString(), true)
    .addField('• Ingress Date', message.member.joinedAt.toDateString())
    .addField('• Ranks', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
    .setColor(0x66ff66)
        
  message.channel.send({ embed });

}else{
  const embed = new Discord.RichEmbed()
    .setThumbnail(userm.avatarURL)
    .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
    .addField('Playing to', userm.presence.game != null ? userm.presence.game.name : "Nothing", true)
    .addField('ID', userm.id, true)
    .addField('Status', userm.presence.status, true)
    .addField('Account Created', userm.createdAt.toDateString(), true)
    .setColor(0x66ff66)
    
  message.channel.send({ embed });
}
}
  
      if(command === 'clear'){
            var perms = message.member.hasPermission("MANAGE_MESSAGES");
if(!perms) return message.channel.send("🚫 `|` **You do not have the permission to delete quantity of messages!*");  
          if(!texto) return message.channel.send(`❗ ➣ **Mention the number of messages you want to delete!**`);
  let cantidad = parseInt(args[0]);
  message.channel.bulkDelete(cantidad);
         message.delete().catch(O_o=>{});
        message.channel.send('Messages successfully deleted!')
        
.then(m => {
        m.delete(3000)
});
  }
  if(command === '8ball'){
  
    if(!args.join(' ')) {
      
  const errEmbed = new Discord.RichEmbed()
      if(!args.join(' ')) return message.channel.send('You have to write ``f&8ball`` and a question!')
  message.channel.send({embed: errEmbed})
  return;
      
}
    
var sayings = [
                                        "Yes",
                                        "No",
                                        "Maybe"];

            var result = sayings[Math.floor(Math.random()*sayings.length)];
    
      const ballEmb = new Discord.RichEmbed()
      
      .setColor(0x66ff66)
      .setAuthor('8ball', 'https://findicons.com/files/icons/1700/2d/512/8_ball.png')
      .setDescription("Question: "+args.join(" ")+"\n\nAnswer: "+result)
            message.channel.send(ballEmb)
    
  }
        if(command === 'electro'){
  const StreamURL = ('http://stream.soundstorm-radio.com:8000/;?d=')

if(message.member.voiceChannel){

message.member.voiceChannel.join()

.then (connection => {
     const embed = new Discord.RichEmbed()
      .setColor(0x66ff66) 
    .setDescription("Transmitting...")
      message.channel.send(embed) 
connection.playArbitraryInput(`${StreamURL}`);

})

.catch(console.log)

} else {
message.react('🚫')
}
        }
  
          if(command === 'anime'){
    const streamURL = ('http://radio2.flex.ru:8000/radionami');
    
    if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => {
      const embed = new Discord.RichEmbed()
      .setColor(0x66ff66) 
    .setDescription("Transmitting ...")
      message.channel.send(embed) 
      connection.playArbitraryInput(`${streamURL}`);
    })
      .catch(console.log)
    }else {
    message.react('🚫')
    }
          }
            if(command === 'trap'){
    const streamURL = ('http://stream.trap.fm:6004');
    
    if (message.member.voiceChannel) {
    message.member.voiceChannel.join()
      .then(connection => {
      const embed = new Discord.RichEmbed()
      .setColor(0x66ff66) 
    .setDescription("Transmitting ...")
      message.channel.send(embed)
      connection.playArbitraryInput(`${streamURL}`);
    })
      .catch(console.log)
    }else {
    message.react('🚫')
    }
    }
  
    if(command === 'avatar'){
  let img = message.mentions.users.first()

if (!img) {
   
    const embed = new Discord.RichEmbed()
    .setImage(`${message.author.avatarURL}`)
    .setColor(0x66ff66)
    .setFooter(`${message.author.username}#${message.author.discriminator}`);
    message.channel.send({ embed });

} else if (img.avatarURL === null) {

    const embed = new Discord.RichEmbed()
    .setImage(`${message.author.defaultAvatarURL}`)
    .setColor(0x66ff66)
    .setFooter(`${message.author.username}#${message.author.discriminator}`);
    message.channel.send({ embed });

} else {

    const embed = new Discord.RichEmbed()
    .setImage(`${img.avatarURL}`)
    .setColor(0x66ff66)
    .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
    message.channel.send({ embed });
}
};
});

client.login(process.env.TOKEN)
