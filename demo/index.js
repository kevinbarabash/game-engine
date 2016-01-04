const canvas = document.createElement('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

document.body.style.margin = 0;
document.body.style.overflow = 'hidden';

const context = canvas.getContext('2d');

let coin, sapling, scene;

let active = false;

//const dirtyRect =

class Scene {
    constructor() {
        this.sprite = new Sprite(sapling);
        this.speed = 500;
    }

    update(delta) {
        let velocity = new Vector(0, 0);

        if (Keyboard.UP_KEY) {
            velocity.y -= 1;
        }
        if (Keyboard.DOWN_KEY) {
            velocity.y += 1;
        }
        if (Keyboard.LEFT_KEY) {
            velocity.x -= 1;
        }
        if (Keyboard.RIGHT_KEY) {
            velocity.x += 1;
        }

        const speed = this.speed * delta / 1000;
        //velocity = velocity.normalize().scale(speed);

        //this.sprite.position = this.sprite.position.add(velocity);
        this.sprite.position.x += speed * velocity.x;
        this.sprite.position.y += speed * velocity.y;
    };

    render() {
        // we don't actually want to have to clear this much... instead we'd
        // like to be able to clear the previous position of the sprite
        canvas.width = canvas.width;
        this.sprite.render(context);
    };
}


loadResources([
    "sounds/retro/jump2.mp3",
    "images/leafers-sapling.png"
], (count, total) => {
    console.log(`${count} of ${total}`);
}).then(resources => {
    coin = resources[0];
    sapling = resources[1];
    coin.play();
    context.drawImage(sapling, 100, 100);

    scene = new Scene();

    active = true;
});


// A Game object encompasses everything?
// There's a starting scene, and scenes can "transition" from one to another

// TODO: think about how to implement pause

let delta = 0;
let lastTimestamp = 0;

const gameLoop = () => {
    const now = Date.now();

    if (lastTimestamp) {
        delta = now - lastTimestamp;
    }

    if (active && delta) {
        scene.update(delta);
        scene.render();
    }

    lastTimestamp = now;

    requestAnimationFrame(gameLoop);
};

// reset the state if the page loses visibility
//visibly.visibilitychange(state => {
//    if (state === 'hidden') {
//        Object.values(keyNames).forEach(name => Keyboard[name] = false);
//        active = false;
//    } else {
//        active = true;
//    }
//});

requestAnimationFrame(gameLoop);
