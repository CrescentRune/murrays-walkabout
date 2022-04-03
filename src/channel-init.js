
exports.createGameChannel = (
    msg,
    channelName,
    categoryName='games'
) => {
    let guild = msg.guild;
    let gameCategory = null;
    let gameChannel  = null;
    let response = '';

    guild.channels.fetch().then((channels) => {
        gameCategory = channels.find(
            (channel) => {
                return channel.name === categoryName && channel.type === "GUILD_CATEGORY"
            }
        );

        gameChannel = channels.find(
            (channel) => {
                return channel.name === channelName && channel.type === "GUILD_TEXT";
            }
        );

    })
    .then(() => {
        if (!gameCategory) {
            return guild.channels.create(
                categoryName, 
                {
                    type: 'GUILD_CATEGORY'
                }
            );
        }
    })
    .then((newChannel) => {
        if (!gameCategory) {
            gameCategory = newChannel;
        }

        if (!gameChannel) {
            return guild.channels.create(channelName, {
                type: 'GUILD_TEXT',
                parent: gameCategory.id
            });
        }
        else {
            response = 'THE MURRAY IS COMING FROM INSIDE THE HOUSE!'
            if (gameChannel.parentId !== gameCategory.id) {
                gameChannel.setParent(gameCategory.id);
            }
        }
    })
    .then((newChannel) => {
        if (!gameChannel) {
            response = 'SEISMIC FLOP! THE MURRAY HAS ARRIVED!'
            gameChannel = newChannel;
        }
        gameChannel.send(response);
    });
}        
    

