import * as pixi from 'pixi.js'
export default class Loader {
    static pictures = {}
    static loadAllImages() {
        return new Promise((resolve, reject) => {
            pixi.loader.add('tile', 'tile.png').load((loader, resources) => {
                Loader.pictures['tile'] = resources.tile.texture;
                console.log(Loader.pictures);
                resolve();
            });
            pixi.loader.onError.add(reject);
        });
    }
}