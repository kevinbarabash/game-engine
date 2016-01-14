const Sprite = require('./sprite');

class ImageSprite extends Sprite {
    constructor(image) {
        super();
        this.image = image;
    }

    render(context) {
        context.save();
        context.translate(this.position.x, this.position.y);
        context.scale(this.scale.x, this.scale.y);
        context.translate(-this.anchor.x * this.image.width, -this.anchor.y * this.image.height);
        context.drawImage(this.image, 0, 0);
        context.restore();

        super.render(context);
    }
}

module.exports = ImageSprite;
