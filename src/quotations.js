const murrayQuotes = require('../resources/murray.json');


export const RESPONSE_CASE = {
    QUOTE: 'QUOTE',             //Requesting a murray quote
    CC_SUCCESS: 'CC_SUCCESS',   //Respond success to create channel
    CC_FAILURE: 'CC_FAILURE',   //Respond to failure to create channel
    UNKNOWN: 'UNKNOWN'
}

const unknownFn = (exp) => `I-I'm sorry, ${exp}. I-I tried to understand you... But, I just wasn't strong enough.`;
const ccSuccess = 'SERVER! MEET SEISMIC FLOP!!';
const ccFailure = 'Sorry there, amigo. THE MURRAY is coming from inside the HOUSE!!'


export const quotations = (() => {
    class Quotations {
        constuctor() {}

        response(state) {
            switch(state) {
                case RESPONSE_CASE.QUOTE:
                    return this.generateQuote();
                case RESPONSE_CASE.CC_SUCCESS:
                    return ccSuccess;
                case RESPONSE_CASE.CC_FAILURE:
                    return ccFailure;
                case RESPONSE_CASE.UNKNOWN:
                    return this.responseUnknown();
            }
        }

        generateQuote() {
            return quotes[Math.floor(Math.random()*quotes.length)];
        }

        responseUnknown(userName) {
            return unknownFn(userName);
        }
    }
});