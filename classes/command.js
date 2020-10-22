class Command {
    link;
    trigger;

    constructor(t, l) {
        this.link = l;
        this.trigger = t;
    }

    execute = (msg) => {
        msg.reply(this.link);
    }
};

module.exports = Command;