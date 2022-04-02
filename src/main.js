const Discord = require("discord.js");
const config = require("resources/config.json");
const quotes = require("resources/murray.json");


const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.login(config.BOT_TOKEN);

const prefix = "_m";


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
        message.reply(response);
    }
    else if (command === 'groovy') {
        const channel_name = 'murrays-walkabout';
        message.guild.channels.fetch().then((channels) => {
            if (channels.find((channel) => channel.name === channel_name)) {
                response = 'Sorry there, amigo. THE MURRAY is coming from inside the HOUSE!!';
            }
            else {
                message.guild.channels.create(channel_name), { //Create a channel
                    type: 'text', //Make sure the channel is a text channel
                    parent: 'games',
                    permissionOverwrites: [{ //Set permission overwrites
                        id: message.guild.id,
                        allow: ['VIEW_CHANNEL'],
                    }]
                }
                response = 'TIME TO SEISMIC FLOP INTO THIS SERVER!!'
            }
            message.reply(response);
        })
    }
    else {
        response = `I-I'm sorry, ${message.author.username}. I-I tried to understand you... But, I just wasn't strong enough.`;
        message.reply(response);
    }
});