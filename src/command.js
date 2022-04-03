class CommandResolver {
    constructor() {}

    resolveCommand(commandMsg, debug=false) {
        const args = commandMsg.split(' ').map((item) => item.toLowerCase());
        const command = args.shift();

        if (debug) {
            printDebugCommand();
        }
    }

    printDebugCommand(command, args) {
        console.log(`COMMAND PROCESSED: ${command}`);
        console.log(`Args: (${args.length})`);
        args.forEach((item) => console.log(item));
    }
}

exports.CommandResolver = CommandResolver;
// exports.resolveCommand = (commandMsg, debug=false) => {
//     // const commandBody = msg.content.slice(process.env.prefix.length);
//     const args = commandMsg.split(' ').map((item) => item.toLowerCase());
//     const command = args.shift();


//     if (debug) {
        
//     }
   
// }