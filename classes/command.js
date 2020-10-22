class Command {
    link;
    trigger;

    constructor(t, l) {
        this.link = l;
        this.trigger = t;
    }

    execute = (msg) => {
        msg.reply(`${link} password: basic-password`);
    }
};

module.exports = Command;