
const countries = require('./countries');

class Puzzle {
    constructor() {
        this.countriesArray = countries.countries;
        this.puzzle = {status: 'NONE'};
    }

    generatePuzzle() {
        let countriesCount = this.countriesArray.length;
        let puzzleCountry = Math.floor(Math.random()*countriesCount);
        let currentCountry = this.countriesArray[puzzleCountry];
        this.puzzle = {
            status: 'IN-PROGRESS',
            country: currentCountry,
        }
    }

    initPuzzle(msg) {
        this.generatePuzzle();
        msg.channel.send('Here\'s a stumper for ya!');
        // msg.channel.send(this.puzzle);
        console.log(this.puzzle);
    }

    autoCompleteGuess(msg, guess) {
        let possibilities = countries.countryNames.filter(
            country => (country.indexOf(guess.toLowerCase()) !== -1)
        );

        possibilities = possibilities.join(', ');
        // msg.author.send('Are you looking for any of these?\n');
        msg.channel.send('Are you looking for any of these?');
        // msg.author.send(possibilities);
        msg.channel.send(possibilities);
    }

    handleGuess(msg) {


    }

    solvePuzzle(msg) {

    }
}

exports.Puzzle = Puzzle;