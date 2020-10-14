const startsWith = (msg, command) => {
    return msg.content.startsWith(command);
};
const help = (msg) => {
    msg.reply("options: !new-client, !new-campaign");
};
const newClient = (msg) => {
    msg.reply("https://airtable.com/shrcZQPa2ZRH8BZZp");
};
const newCampaign = (msg) => {
    msg.reply("https://airtable.com/shrZJNNAgnZyJR0OB");
};


const checkForCommand = (msg) => {
    var commands = [
        ['!help', help],
        ['!new-client', newClient],
        ['!new-campaign', newCampaign]
    ];

    commands.forEach((command) => {
        if (startsWith(msg, command[0])) {
            command[1](msg);
        }
    });
};

module.exports = checkForCommand