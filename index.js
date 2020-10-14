const startsWith = (msg, command) => {
    return msg.content.startsWith(command);
};
const help = (msg) => {
    msg.reply("unfinished function");
};
const newClient = (msg) => {
    msg.reply("unfinished function");
};
const newCampaign = (msg) => {
    msg.reply("unfinished function");
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

const initializeRVLT6900 = () => {
    // DO STUFF
};

const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config()
client.on("ready", initializeRVLT6900).on("message", checkForCommand);
client.login(process.env.TOKEN);