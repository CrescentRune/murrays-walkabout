require('dotenv').config();
const discord = require("discord.js");
const quotes = require("../resources/murray.json");

const channel_init = require("./channel-init.js")
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
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();    

    if (command === 'quote') {
        response = generateQuote();
        message.reply(response);
    }
    else if (command === 'safehouse') {
        const channel_name = 'murrays-walkabout';
        // channel_init.createGameChannel(message, channel_name);
        channel_init.createGameChannel(message, channel_name);
        /*
        let channelP = null;

        let guild = message.guild;

        guild.channels.fetch().then((channels) => {

            let catPromise = null

            let gameCat = channels.find((channel) => channel.type === "GUILD_CATEGORY" && channel.name === "games")            
            if (!(gameCat)) {
                console.log('Creating games!!')
                catPromise = guild.channels.create('games', {
                    type: "GUILD_CATEGORY"
                });
            }
            else {
                catPromise = Promise.resolve(gameCat); 
            }

            
            let gameChannel = channels.find((channel) => channel.name === channel_name);
            response = `Sorry there, ${message.author.username}. THE MURRAY is coming from inside the HOUSE!!`
            if (!gameChannel) {
                catPromise.then((catChannel) => {
                    message.guild.channels.create(
                        channel_name, 
                        { //Create a channel
                        parent: catChannel.id,
                        permissionOverwrites: [{ //Set permission overwrites
                            id: message.guild.id,
                            allow: ['VIEW_CHANNEL'],
                        }]
                    }).then(
                        (channel) => {
                            gameChannel = channel;
                            gameChannel.send(response);
                        }
                    );
                    response = 'TIME TO SEISMIC FLOP INTO THIS SERVER!!'
                });
            } else {
                catPromise.then((catChannel) => {
                    if (gameChannel.parentId !== catChannel.id) {
                        gameChannel.setParent(catChannel.id);
                    }
                    gameChannel.send(response);
                });
            }
        })
        */
    }
    else {
        response = `I-I'm sorry, ${message.author.username}. I-I tried to understand you... But, I just wasn't strong enough.`;
        message.reply(response);
    }
});