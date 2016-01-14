// main entry point for the library

module.exports = {
    Keyboard: require('./input/keyboard'),
    Gamepad: require('./input/gamepad'),

    Vector: require('./math/vector'),
    Matrix: require('./math/matrix'),

    Sprite: require('./scene_graph/sprite'),
    ImageSprite: require('./scene_graph/image_sprite'),
    GroupSprite: require('./scene_graph/group_sprite'),
    TextSprite: require('./scene_graph/text_sprite'),

    Loader: require('./loader')
};
