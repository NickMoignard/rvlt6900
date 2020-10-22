const Command = require("../classes/command");

const help = (msg, commands) => {
    commands.append(new Command("!pm-update", "")); // Lame Hard Coded bit hopefully will get time to update this.
    var returnString = "Options atm: \n";
    commands.forEach((c) => {
        returnString += `\t- ${c.trigger}\n`;
    });
    msg.reply(returnString);
};
module.exports = help;