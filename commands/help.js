const help = (msg, commands) => {
    var returnString = "Options atm: \n";
    commands.forEach((c) => {
        returnString += `\t- ${c.trigger}\n`;
    });
    msg.reply(returnString);
};
module.exports = help;