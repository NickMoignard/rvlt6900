const Command = require('./classes/command');
const help = require('./commands/help');
const { startsWith } = require('./helpers');

const commands = [
    new Command('!new-client', "https://airtable.com/shrcZQPa2ZRH8BZZp"),
    new Command("!new-campaign", "https://airtable.com/shrZJNNAgnZyJR0OB"),
    new Command('!new-prototype', "https://airtable.com/shrdH2aDFhdwKoFZK")
];

const checkForCommand = (msg) => {
    if (startsWith(msg, '!h') || startsWith(msg, "!help")) {
        help(msg, commands);
    } else {
        commands.forEach((c) => {
            if (startsWith(msg, c.trigger)) { c.execute; }
        });
    }
};


module.exports = checkForCommand;