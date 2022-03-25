const Discord = require("discord.js");
const config = require("./config.json");
const quotes = require("./murray.json");


const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.login(config.BOT_TOKEN);

const prefix = "_m"

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    let response = '';
    if (command === 'quote') {
        response = quotes[Math.floor(Math.random()*quotes.length)];
    }
    else {
        response = `I-I'm sorry, ${message.author.username}. I-I tried to understand you... But, I just wasn't strong enough.`;
    }

    message.reply(response);
  });