const Command = require('../classes/command');
const help = require('../commands/help');
const createSystemReport = require('../commands/createSystemReport');
const { startsWith } = require('./startsWith');

const commands = [
    new Command('!new-client', "https://airtable.com/shrcZQPa2ZRH8BZZp"),
    new Command("!new-campaign", "https://airtable.com/shrZJNNAgnZyJR0OB"),
    new Command("!submit-design", "https://airtable.com/shrfnhO54USPX49k5"),
    new Command("!send-to-production", "https://airtable.com/shrVkxbqoaRj3JU7l")
];

const checkForCommand = (msg) => {
    if (startsWith(msg, '!h') || startsWith(msg, "!help")) {
        help(msg, commands);
    } else if (startsWith(msg, "!pm-update")) {
        createSystemReport();
    } else {
        commands.forEach((c) => {
            if (startsWith(msg, c.trigger)) { c.execute; }
        });
    }
};


module.exports = checkForCommand;