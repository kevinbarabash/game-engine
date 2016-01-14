class Vector {
    constructor(x, y, z = 0) {
        Object.assign(this, { x, y, z });
    }

    set(x, y, z = this.z) {
        Object.assign(this, { x, y, z });
    }

    add(other) {
        return new Vector(
            this.x + other.x,
            this.y + other.y,
            this.z + other.z
        );
    }

    sub(otherVector) {
        return new Vector(
            this.x - other.x,
            this.y - other.y,
            this.z - other.z
        );
    }

    scale(k) {
        return new Vector(k * this.x, k * this.y, k * this.z);
    }

    dot(other) {
        return this.x * other.x + this.y * other.y + this.z * other.y;
    }

    cross(other) {
        return new Vector(
            this.y * other.z - this.z * other.y,
            this.z * other.x - this.x * other.z,
            this.x * other.y - this.y * other.x
        );
    }

    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    normalize() {
        if (this.x === 0 && this.y === 0 && this.z === 0) {
            return this;
        }
        return this.scale(1 / this.length());
    }
}

module.exports = Vector;
