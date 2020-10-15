const checkMsg = require('./checkForCommand');

const initializeRVLT6900 = () => {
    // probs do some API calls here
};

const Discord = require("discord.js");
const client = new Discord.Client();
require('dotenv').config();
client.on("ready", initializeRVLT6900).on("message", checkMsg);
client.login(process.env.TOKEN);