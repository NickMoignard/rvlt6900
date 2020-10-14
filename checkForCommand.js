const startsWith = (msg, command) => {
    return msg.content.startsWith(command);
};
const help = (msg) => {
    var returnString = "Options atm: \n";
    commands.forEach((c) => {
        returnString += `\t- ${c[0]}\n`;
    });
    msg.reply(returnString);
};
const newClient = (msg) => {
    msg.reply("https://airtable.com/shrcZQPa2ZRH8BZZp");
};
const newCampaign = (msg) => {
    msg.reply("https://airtable.com/shrZJNNAgnZyJR0OB");
};
const newPrototype = (msg) => {
    msg.reply("https://airtable.com/shrdH2aDFhdwKoFZK");
};

const checkForCommand = (msg) => {
    commands.forEach((command) => {
        if (startsWith(msg, command[0])) {
            command[1](msg);
        }
    });
};

const commands = [
    ['!help', help],
    ['!new-client', newClient],
    ['!new-campaign', newCampaign],
    ['!new-prototype', newPrototype]
];

module.exports = checkForCommand