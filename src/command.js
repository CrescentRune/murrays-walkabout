const channel_init = require("./channel-init.js");
const quotation = require("./quotations.js");
const puzzle = require("./puzzle");

const COMMAND = {
    INITIALIZE: 'safehouse',
    QUOTATION: 'quote',
    AUTOCOMPLETE: 'ac',
    PUZZLE: 'puzzle'

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
    constructor() {
        this.puzzle = new puzzle.Puzzle();
        this.args = null;
    }

    processCommand(commandBody, msg) {
        const command = this.preprocessCommand(commandBody);
        this.handleCommand(command, msg);
        // issueResponse(responseType, msg, channel);
    }

    preprocessCommand(commandBody) {
        this.args = commandBody.split(' ').map((item) => item.toLowerCase());
        console.log(this.args);
        const command = this.args.shift();

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
                this.puzzle.initPuzzle(msg);
                break;
            case COMMAND.AUTOCOMPLETE:
                this.puzzle.autoCompleteGuess(msg, this.args.shift());
                break;
            default:
                this.sendUnrecognizedResponse(msg);
            
        }
    }

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