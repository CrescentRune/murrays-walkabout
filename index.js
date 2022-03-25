const Discord = require("discord.js");
const config = require("./config.json");
const quotes = require("./murray.json");


const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.login(config.BOT_TOKEN);

const prefix = "_m"

function generateQuote() {
    return quotes[Math.floor(Math.random()*quotes.length)];
} 


client.on("messageCreate", (message) => {
    if (message.author.bot) return;

    if (message.mentions.has(client.user)) {
        message.reply(generateQuote());
        return;
    }

    if (!message.content.startsWith(prefix)) return;
    
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();    

    if (command === 'quote') {
        response = generateQuote();
    }
    else {
        response = `I-I'm sorry, ${message.author.username}. I-I tried to understand you... But, I just wasn't strong enough.`;
    }

    message.reply(response);
});