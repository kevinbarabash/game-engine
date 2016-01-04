class Sprite {
    constructor(image) {
        this.image = image;
        this.position = new Vector(0, 0);
    }

    render(context) {
        context.drawImage(this.image, this.position.x, this.position.y);
    }
}
