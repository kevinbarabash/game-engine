const Vector = require('../math/vector');

class Sprite {
    constructor() {
        this.position = new Vector(0, 0);
        this.scale = new Vector(1, 1);
        this.anchor = new Vector(0.5, 0.5);

        this.debug = true;
    }

    render(context) {
        if (this.debug) {
            context.strokeStyle = 'red';
            context.fillStyle = 'red';
            context.beginPath();
            context.arc(this.position.x, this.position.y, 5, 0, 2 * Math.PI, false);
            context.fill();
            // TODO: use a transform matrix that is a applied to four points
            context.strokeRect(this.position.x - this.anchor.x * this.image.width * this.scale.x, this.position.y - this.anchor.y * this.image.height * this.scale.y, this.scale.x * this.image.width, this.scale.y * this.image.height);
        }
    }
}

module.exports = Sprite;
