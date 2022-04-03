



exports.createGameChannel = (
    msg,
    channelName,
    categoryName='games'
) => {
    let guild = msg.guild;
    console.log('Cache 1:');
    console.log(guild.channels.cache);
    guild.channels.fetch().then((channels) => {
        console.log('Cache 2:');
        console.log(guild.channels.cache);
    })
}        
    


/*
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
    }
    */