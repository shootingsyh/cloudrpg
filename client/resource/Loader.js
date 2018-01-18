import * as pixi from 'pixi.js'
export default class Loader {
    static pictures = {}
    static load_all_images() {
        return new Promise((resolve, reject) => {
            pixi.loader.add('tile', 'tile.png').load((loader, resources) => {
                Loader.pictures['tile'] = resources.tile.texture;
                resolve();
            });
            pixi.loader.onError.add(reject);
        });
    }
}