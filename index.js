const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', async() => {
var server = "496001281643773993"; // ايدي السررفر
var channel = "496314042537738240";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**كودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودزكودز **')
    },305);
})

var prefix = "$"
client.on('message', message => {

  if (message.content.startsWith( prefix + "rep")) {
  if (!message.channel.guild) return;
  let args = message.content.split(" ").slice(1).join(' ');
  client.channels.get("496001790253465600").send(#rep<@!+ args +>)
  }
  });

client.login(process.env.BOT_TOKEN); 

var prefix = '!!';
