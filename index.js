const Discord = require("discord");
const client = new Discord.Client();

const initializeRVLT6900 = () => {

};

const checkMessage = (msg) => {
    if (msg.content === "ping") {
        msg.reply("Bong!")
    }
};

client.on("ready", initializeRVLT6900).on("message", checkMessage);
client.login(`${process.env.TOKEN}`);