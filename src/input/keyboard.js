const Keyboard = {
    UP_KEY: false,
    DOWN_KEY: false,
    LEFT_KEY: false,
    RIGHT_KEY: false
};

const keyNames = {
    37: 'LEFT_KEY',
    38: 'UP_KEY',
    39: 'RIGHT_KEY',
    40: 'DOWN_KEY'
};

// TODO: attach timestamps to events
document.addEventListener('keydown', e => {
    if (e.keyCode in keyNames) {
        Keyboard[keyNames[e.keyCode]] = true;
    }
});

document.addEventListener('keyup', e => {
    if (e.keyCode in keyNames) {
        Keyboard[keyNames[e.keyCode]] = false;
    }
});

module.exports = Keyboard;
