const quotes = require('../resources/murray.json');


const RESPONSE_CASE = {
    QUOTE: 'QUOTE',             //Requesting a murray quote
    CC_SUCCESS: 'CC_SUCCESS',   //Respond success to create channel
    CC_FAILURE: 'CC_FAILURE',   //Respond to failure to create channel
    UNKNOWN: 'UNKNOWN'
}

const unknownFn = (exp) => `I-I'm sorry, ${exp}. I-I tried to understand you... But, I just wasn't strong enough.`;
const ccSuccess = 'SERVER! MEET SEISMIC FLOP!!';
const ccFailure = 'Sorry there, amigo. THE MURRAY is coming from inside the HOUSE!!'


generateQuote = () => {
    return quotes[Math.floor(Math.random()*quotes.length)];
}

sendQuote = (msg) => {
    msg.reply(generateQuote());
}

// exports.generateQuote = generateQuote;
exports.sendQuote = sendQuote;