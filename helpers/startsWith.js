const startsWith = (msg, trigger) => {
    return msg.content.startsWith(trigger);
};

exports.startsWith = startsWith;