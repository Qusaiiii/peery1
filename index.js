const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async() => {
var server = "496001281643773993"; // ايدي السررفر
var channel = "496314042537738240";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**كودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودز **')
    },305);
})

client.on("message", message => {
if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
    if(command === "rep") {
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("**اكتب اي دي**");
	message.channel.send('#rep <@!${args}>')
    }
});

client.login(process.env.BOT_TOKEN); 

var prefix = '!!';
