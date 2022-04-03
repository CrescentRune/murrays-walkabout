const channel_init = require("./channel-init.js");
const quotation = require("./quotations.js");

const COMMAND = {
    INITIALIZE: 'safehouse',
    QUOTATION: 'quote',

}

const unknownCommandResp = (exp) => `I-I'm sorry, ${exp}. I-I tried to understand you... But, I just wasn't strong enough.`;


// const COMMAND_MAP = new Map([
//     [COMMANDS.INITIALIZE, channel_init.createGameChannel],
//     [COMMANDS.QUOTATION, () => RESPONSE_TYPE.QUOTATION],
// ]);

const RESPONSE_TYPE = {    
    QUOTATION: 'QUOTATION',
    CHANNEL_CREATED: 'CHANNEL_CREATED',
    CHANNEL_EXISTS: 'CHANNEL_EXISTS',
    UNKNOWN: 'UNKNOWN',
}

// class Command {
//     constructor(commandBody, args) {
//         this.commandBody = commandBody;
//         this.args = args;
//     }
// }


class CommandEngine {
    constructor() {}

    processCommand(commandBody, msg) {
        const command = this.preprocessCommand(commandBody);
        this.handleCommand(command, msg);
        // issueResponse(responseType, msg, channel);
    }

    preprocessCommand(commandBody) {
        const args = commandBody.split(' ').map((item) => item.toLowerCase());
        const command = args.shift();

        return command/*, args*/;
    }

    handleCommand(command, msg) {
        switch (command) {
            case COMMAND.INITIALIZE:
                channel_init.createGameChannel(msg, 'murrays-walkabout');
                break;
            case COMMAND.QUOTATION:
                quotation.sendQuote(msg);
                break;
            case COMMAND.PUZZLE:
                
            default:
                this.sendUnrecognizedResponse(msg);
            
        }
    }

    // issueResponse(responseType, msg, channel=null) {
    //     let responseMsg = '';
    //     switch (responseType) {
    //         case QUOTATION:
    //             responseMsg = quotation.generateQuotation().then();
    //             msg.reply(responseMsg);
    //             break;
    //         case CHANNEL_CREATED:
    //             responseMsg = 'SEISMIC FLOP! THE MURRAY has arrived!';
    //             channel.send(responseMsg);
    //             break;
    //         case CHANNEL_EXISTS:
    //             responseMsg = 'THE MURRAY is coming from inside the SERVER!!';
    //             channel.send(responseMsg);
    //             break;
    //         case UNKNOWN:
    //             responseMsg = `I-I'm sorry, ${msg.author.username}. I-I tried to understand you... But, I just wasn't strong enough.`
    //             msg.reply(responseMsg);
    //             break;
    //     }
    // }

    sendUnrecognizedResponse(msg) {
        msg.channel.send(unknownCommandResp(msg.author.username));
    }

    printDebugCommand(command, args) {
        console.log(`COMMAND PROCESSED: ${command}`);
        console.log(`Args: (${args.length})`);
        args.forEach((item) => console.log(item));
    }
}

exports.CommandEngine = CommandEngine;