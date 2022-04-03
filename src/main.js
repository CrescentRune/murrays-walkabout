require('dotenv').config();
const discord = require("discord.js");
const quotes = require("../resources/murray.json");

const channel_init = require("./channel-init.js");
const command = require("./command.js");
// require("./command.js").resolve();
// command.resolve();

let commandEngine = new command.CommandEngine();

// const channel_init = require('./channel-init.js');


const client = new discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.login(process.env.BOT_TOKEN);

const prefix = process.env.PREFIX;


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
    commandEngine.processCommand(commandBody, message);

    // command.resolveCommand(commandBody);
    
    // const commandBody = message.content.slice(prefix.length);
    // const args = commandBody.split(' ');
    // const command = args.shift().toLowerCase();    

    // if (command === 'quote') {
    //     response = generateQuote();
    //     message.reply(response);
    // }
    // else if (command === 'safehouse') {
    //     const channel_name = 'murrays-walkabout';
    //     // channel_init.createGameChannel(message, channel_name);
    //     channel_init.createGameChannel(message, channel_name);
    // }
    // else {
    //     response = `I-I'm sorry, ${message.author.username}. I-I tried to understand you... But, I just wasn't strong enough.`;
    //     message.reply(response);
    // }
});