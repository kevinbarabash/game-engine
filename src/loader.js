
const loadImage = function(url) {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.addEventListener('load', () => {
            resolve(img);
        });
        img.addEventListener('error', () => {
            reject(img);
        });
        img.src = url;
    });
};

const loadSound = function(url) {
    return new Promise((resolve, reject) => {
        const snd = document.createElement('audio');
        snd.addEventListener('canplaythrough', () => {
            resolve(snd);
        });
        snd.addEventListener('error', () => {
            reject(snd);
        });
        snd.src = url;
    });
};

// TODO: implement font loading
const loadFont = function(url) {

};

const extname = function(path) {
    const parts = path.split('.');
    if (parts.length === 0 || parts.length === 1 && path[0] === '.') {
        return '';
    } else {
        return parts[parts.length - 1];
    }
};

const loadResources = function(urls, progressCallback = () => {}) {
    const promises = urls.map(url => {
        const ext = extname(url);

        switch (ext) {
            case 'png':
            case 'gif':
            case 'jpg':
            case 'jpeg':
            case 'svg':
                return loadImage(url);
            case 'mp3':
                return loadSound(url);
        }

        if (ext === '') {
            throw Error(`resources has no extension: ${url}`);
        } else {
            throw Error(`unrecognized resource type: ${url}`);
        }
    });

    let count = 0;

    promises.forEach(promise => {
        promise.then(() => {
            count++;
            progressCallback(count, promises.length);
        });
    });

    progressCallback(count, promises.length);

    return Promise.all(promises);
};

module.exports = {
    loadResources
};
